from flask import Flask, render_template, url_for, redirect, abort, jsonify, request
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
    return render_template('index.html')

@app.route('/data/<fname>')
def getData(fname):
    fname = fname.strip()
    dirPath = os.path.join(staticPath,  os.path.join('data', 'drebin'))
    flag = 0
    # newline = ""
    for x in os.listdir(dirPath):
        fullx = os.path.join(dirPath, x)
        if not os.path.isdir(fullx):
            continue
        if x == fname:
            flag = 1
            break
    if flag == 0:
        abort(404)
    fullPath = os.path.join(dirPath, fname)
    xmlPath = os.path.join(fullPath, fname + '.j')
    #TODO: if not os.path.exists(xmlPath)
    if not os.path.exists(xmlPath):
        abort(404)
    info = functions.readXMLToJson(xmlPath, ['title','pngsrc'])
    # return jsonify(json.dumps(info))
    colNum = 5
    rownum = len(info)/colNum + (1 if len(info)%colNum !=0 else 0)
    return render_template('familyPage.html', info=info, rownum=rownum, colnum=colNum,infolen=len(info))
    # return jsonify(json.dumps(info))

@app.route('/appdetail')
def getDetail():
    gexf = request.args.get('gexf', None)
    json = request.args.get('json', None)
    if not gexf or not json:
        abort(404)
    return gexf + " " + json
    pass

# @app.errorhandler(404)
# def notFound(errorMsg):
#     return "<h1>404</h1>" + "<br/>" + "errorMsg: " + errorMsg
#     pass

if __name__ == '__main__':
    app.run(debug=True)
# test