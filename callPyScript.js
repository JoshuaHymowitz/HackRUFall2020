// const express = require('express')

const {spawn} = require('child_process');

const childPython = spawn('python', ['main.py']);

childPython.stdout.on('data', data => {
    console.log('stdout:' + data);
});

