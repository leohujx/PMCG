from flask import Flask, render_template, url_for, redirect, abort, jsonify, request, make_response
import functions
import os
import json

app = Flask(__name__)

app.jinja_env.variable_start_string = '{{ '
app.jinja_env.variable_end_string = ' }}'
# to enable the break tag can be used in jinja2
app.jinja_env.add_extension('jinja2.ext.loopcontrols')

rootPath = os.path.dirname(__file__)
staticPath = os.path.join(rootPath, 'static')

@app.route('/')
def index():
    typicalj = functions.getDataPath('typical.j')
    fList = functions.readXMLToJson(typicalj, ["title", "src"])
    colNum = 5
    rownum = len(fList) / colNum + (1 if len(fList) % colNum != 0 else 0)
    return render_template('index.html', fList=fList, flen=len(fList), colnum=colNum, rownum=rownum)

@app.route('/data/<fname>')
def getData(fname):
    fname = fname.strip()
    dirpath = functions.getDataPath(fname)
    if not os.path.exists(dirpath):
        abort(404)

    xmlPath = functions.getDataPath(os.path.join(fname, fname + '.j'))

    #TODO: if not os.path.exists(xmlPath)
    if not os.path.exists(xmlPath):
        abort(404)
    info = functions.readXMLToJson(xmlPath, ['title','pngsrc'])
    # return jsonify(json.dumps(info))
    colNum = 5
    rownum = len(info)/colNum + (1 if len(info)%colNum !=0 else 0)
    return render_template('familyPage.html', info=info, rownum=rownum, colnum=colNum,infolen=len(info), fname=fname)
    # return jsonify(json.dumps(info))

@app.route('/appjson')
def getAppJson():
    page = request.args.get('page', None)
    per_page = request.args.get('per_page', None)
    fname = request.args.get('fname', None)
    jname = request.args.get('jname', None)
    if not fname or not jname or not page or not per_page:
        abort(404)
    page, per_page, fname, jname = functions.trim(page, per_page, fname, jname)
    if not functions.is_number(page, per_page):
        abort(404)
    page, per_page = functions.convert2number(page, per_page)
    jsonPath = functions.getDataPath(os.path.join(fname, jname))
    if not os.path.exists(jsonPath) or page <= 0 or per_page <= 0:
        abort(404)
    jsonData = functions.getJson(jsonPath)
    riskyNodeData = jsonData['RiskyNode'][(page-1)*per_page: page*per_page]
    # risyNodeData['RiskyNodeNum'] = jsonData['RiskyNodeNum']
    response = make_response(jsonify(riskyNodeData))
    response.headers['RiskyNodeNum'] = jsonData['RiskyNodeNum']
    return response


@app.route('/appdetail')
def getDetail():
    fname = request.args.get('fname', None)
    gexf = request.args.get('gexf', None)
    json = request.args.get('json', None)
    if not gexf or not json or not fname:
        abort(404)
    if not functions.is_same(gexf, json):
        abort(404)
    # dirPath = os.path.join(staticPath, os.path.join('data', 'drebin'))
    return render_template('appdetail.html',appname=gexf.split('.')[0],fname=fname, json=json)

# @app.errorhandler(404)
# def notFound(errorMsg):
#     return "<h1>404</h1>" + "<br/>" + "errorMsg: " + errorMsg
#     pass

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
