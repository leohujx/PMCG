# coding:utf-8
from xml.etree import ElementTree as ET


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


def getImages(xmlPath):
    pass