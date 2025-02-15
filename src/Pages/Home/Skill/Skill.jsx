import React from 'react';
import html from '../../../assets/htmll.png';
import css from '../../../assets/css-logo.png';
import js from '../../../assets/js.png';
import node from '../../../assets/node.png';
import react from '../../../assets/react-icon-256x228-97ltgbl1.png';
import express from '../../../assets/express.png';
import mongo from '../../../assets/logo-mongodb-png-mongo-db-shaped-sticker-650.png';
import vscode from '../../../assets/vscode.png';
import C from '../../../assets/c programming.png';
import github from '../../../assets/github.png';
import firebase from '../../../assets/firebase.png';
import tailwind from '../../../assets/tailwind.png';
import bootstrap from '../../../assets/Bootstrap_logo.png';
import dart from '../../../assets/dart.png';
import Marquee from 'react-fast-marquee';

const Skill = () => {
  return (
    <div id="skills" className=" flex flex-col gap-8 items-center overflow-hidden py-16">
      <div>
        <h2 className="font-bold text-4xl flex items-center justify-center">
          <span>My Skills</span>
        </h2>
      </div>
      <div>
        <Marquee>
          <div className="flex flex-col gap-10">
            {/* Row 1 */}
            <div className="flex justify-center items-center gap-6">
              <img src={html} alt="HTML logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={css} alt="CSS logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={js} alt="JavaScript logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={node} alt="Node.js logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={react} alt="React logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={express} alt="Express.js logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
            </div>
            {/* Row 2 */}
            <div className="flex justify-center items-center gap-6">
              <img src={mongo} alt="MongoDB logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={vscode} alt="VS Code logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={C} alt="C programming logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={github} alt="GitHub logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={firebase} alt="Firebase logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={tailwind} alt="Tailwind CSS logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={bootstrap} alt="Bootstrap logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
              <img src={dart} alt="Dart logo" className="w-24 h-24 rounded-lg border border-gray-300 p-2 shadow-lg hover:scale-105 transition-transform" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skill;
