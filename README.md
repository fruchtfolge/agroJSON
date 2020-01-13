# agroJSON - A JSON schema for agriculture
agroJSON is a JSON schema designed to simplify digital communication along the 
agricultural production and supply chain. It closely follows the specifications made by 
[agroXML](http://195.37.233.20/), and tries to be as compatible as possible.

## Why not use agroXML?
XML and JSON both have their benefits. However, XML shines with features like
`attributes`, `namespacing`, and well established schema validation. This makes it 
especially suitable for the heterogenous requirements present in the agricultural 
production and supply chain. In server-to-server, Java and many other environments, agroXML should therefore remain the preferred way of communication.

With the establishment and uptake of modern web frameworks such as [Angular](https://angularjs.org/), 
[React](https://reactjs.org/) and [Vue](https://vuejs.org/), feature-rich client 
applications are becoming more and more popular. In most cases, these client applications
directly leverage [RESTful API's](https://de.wikipedia.org/wiki/Representational_State_Transfer) in order 
to provide content to their users. Since these client applications are largely written in 
JavaScript, and JSON (**J**ava**S**cript **O**bject **N**otation) being natively supported to be parsed by JavaScript, using JSON has become a de-facto standard for exchanging data between web services and clients. agroJSON aims to be a drop-in replacement for agroXML in client-server scenarios where JSON would be preferred over XML.

## Differences to agroXML
In agroXML, spatial data is written in a subset (profile) of [Geography Markup Language (GML)](https://www.opengeospatial.org/standards/gml), being an XML grammar. As agroJSON builds on the JSON format, [GeoJSON](https://de.wikipedia.org/wiki/GeoJSON) is used to describe spatial data instead. This has a set of advantages 