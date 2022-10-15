import React, { Component } from 'react';
import '../../node_modules/fundamental-styles/dist/fundamental-styles.css';

const Sample1 = () => {
    return (
      <div>
        <div className="w-screen h-screen flex items-center justify-center">
          <div
            className="grid items-center justify-center w-screen grid-cols-[repeat,3,auto]"
            id="body"
          >
            <div className="bg-black h-24 w-24 border-white border-solid border" data-cell />
            <div className="bg-black h-24 w-24 border-white border-solid border" data-cell />
            <div className="bg-black h-24 w-24 border-white border-solid border" data-cell />
            <div className="bg-black h-24 w-24 border-white border-solid border" data-cell />
            <div className="bg-black h-24 w-24 border-white border-solid border" data-cell />
            <div className="bg-black h-24 w-24 border-white border-solid border" data-cell />
            <div className="bg-black h-24 w-24 border-white border-solid border" data-cell />
            <div className="bg-black h-24 w-24 border-white border-solid border" data-cell />
            <div className="bg-black h-24 w-24 border-white border-solid border" data-cell />
          </div>
        </div>
      </div>
    );
}

export default Sample1;