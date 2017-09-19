# coding:utf-8
from xml.etree import ElementTree as ET
from flask import abort
import os
from PMCG import staticPath
import json

def readXMLToJson(xmlPath, tags):
    tree = ET.parse(xmlPath)
    root = tree.getroot()
    mp = []
    for picture in root.findall('picture'):
        tmp = {}
        for tag in tags:
            tmp[tag] = picture.find(tag).text
        mp.append(tmp)
    return mp

def is_same(gexf, json):
    if '.' not in gexf or '.' not in json:
        return False
    gexfName = gexf.split('.')[0]
    jsonName = json.split('.')[0]
    return gexfName == jsonName

def trim(*args):
    tmp = []
    for ct in args:
        if isinstance(ct, str):
            tmp.append(ct.strip())
        else:
            tmp.append(ct)
    return tmp
    pass

def is_number(*args):
    for arg in args:
        if not arg.isdigit():
            return False
    return True

def convert2number(*args):
    tmp = []
    for arg in args:
        tmp.append(int(arg))
    return tmp

def getDataPath(subPath):
    dirPath = os.path.join(staticPath, os.path.join('data', 'drebin'))
    fullPath = os.path.join(dirPath, subPath)
    return fullPath

def getDataUrl(subPath):
    return os.path.join(os.path.join('static/data','drebin'), subPath)

def getJson(jsonPath):
    with open(jsonPath, 'r') as f:
        data = f.read()
    jsonData = json.loads(data)
    return jsonData

def getImages(xmlPath):
    pass