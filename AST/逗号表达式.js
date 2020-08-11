/*
author  : 寒菱
date    : 2020/8/11
desc    : 
*/

const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode = "a = 1, 3, 5";

let ast = parse(jscode);

const visitor =
    {
        ExpressionStatement(path){
            let {expression} = path.node;
            if(!t.isSequenceExpression(expression)){
                return;
            }
            let tmp = [];
            expression.expressions.forEach(express=>{
                tmp.push(t.ExpressionStatement(express))
            })

            path.replaceInline(tmp)
        }
    }


//some function code


traverse(ast,visitor);
let {code} = generator(ast);
console.log(code);