/*! For license information please see main.a5de3275fc8a4af07412.bundle.js.LICENSE.txt */
(()=>{var e,t={324:(e,t,l)=>{"use strict";l(260);const s=750,o=1334,a="BootScene",i="GameScene",r=73,n="can_move",c=!1,h=0,u=1,b=2,d=3,p=4,g=9;class C extends Phaser.GameObjects.Image{constructor(e,t,l,s,o){super(e,t,l,s,o),this.onPressed=!1,this.onOver=!1,this.rawScaleX=1,this.scene.add.existing(this),this.setInteractive()}playTouchDownSound(){this.buttonSound.play()}reset(){this.onPressed&&this.scene.tweens.add({targets:this,scale:{from:this.scaleX,to:this.rawScaleX},duration:100,onComplete:()=>{this.onPressed=!1}})}startOver(){this.onOver||(this.onOver=!0,this.setTint(4388311),this.overTween=this.scene.tweens.add({targets:this,scale:{from:this.scaleX,to:1.18*this.rawScaleX},duration:500,yoyo:!0,repeat:-1}))}endOver(){this.stopOverTween(),this.reset()}stopOverTween(){this.overTween&&(this.onOver=!1,this.setTint(16777215),this.overTween.stop(),this.scene.tweens.add({targets:this,scale:{from:this.scaleX,to:this.rawScaleX},duration:100}))}}const f=C,m=class extends f{constructor(e,t,l,s,o){super(e,t,l,s,o),this.touchDown=()=>{this.onPressed||(this.onPressed=!0,this.stopOverTween(),this.scene.tweens.add({targets:this,scale:{from:this.scaleX,to:.8*this.scaleX},duration:100,ease:"Linear"}))},this.touchUp=e=>{this.onPressed&&this.scene.tweens.add({targets:this,scale:{from:this.scaleX,to:this.rawScaleX},duration:100,ease:"Linear",onComplete:()=>{this.onPressed=!1,e()}})}}},T=class extends m{constructor(e){super(e.scene,e.x,e.y,e.texture),this.onTouchDown=()=>{this.touchDown()},this.onTouchUp=()=>{this.touchUp((()=>{this.scene.scene.get(i).gameManager.restart()}))},this.onPointOver=()=>{this.startOver()},this.onPointOut=()=>{this.endOver()},this.initButton()}initButton(){const e=class{static scaleWidth(e,t){return t/e}static scaleHeight(e,t){return t/e}static scaleAuto(e,t,l){let s=1,o=1;return e>t?(s=l/e,o=s):(o=l/t,s=o),[s,o]}}.scaleWidth(this.width,.12*s);this.setScale(e),this.rawScaleX=e,this.setDepth(g)}processInput(){this.on(Phaser.Input.Events.POINTER_DOWN,this.onTouchDown),this.on(Phaser.Input.Events.POINTER_UP,this.onTouchUp),this.on(Phaser.Input.Events.POINTER_OVER,this.onPointOver),this.on(Phaser.Input.Events.POINTER_OUT,this.onPointOut)}},v=class{constructor(e,t,l){this.tubeCount=e,this.ballType=t,this.tubes=l}isGameOver(){return this.isAllTubeComplete()}checkTubesComplete(){for(let e of this.tubes)this.isTubeComplete(e)?e.isComplete=!0:e.isComplete=!1}getTubeById(e){return this.tubes.find((t=>t.id===e))}isAllTubeComplete(){for(let e of this.tubes)if(0!==e.ballColors.length&&!this.isTubeComplete(e))return!1;return!0}isTubeComplete(e){if(e.ballColors.length!==e.tall)return!1;for(let t=0;t<e.ballColors.length;t++){if(e.ballColors[t]!==e.color&&0!==e.color)return!1;if(t<e.ballColors.length-1&&e.ballColors[t]!==e.ballColors[t+1])return!1}return!0}};class O extends Phaser.GameObjects.Text{constructor(e,t,l,s,o){super(e,t,l,s,o),e.add.existing(this),this.initLabel()}initLabel(){this.setShadow(0,4,"rgba(0,0,0,0.5)",5)}}const B=O;class y extends Phaser.GameObjects.Image{constructor(e){super(e.scene,e.x,e.y,e.texture,e.frame),this.tube=e.tube,this.color=e.color,this.id=e.id,this.initBall(),this.scene.add.existing(this)}updatePosition(){this.x=this.tube.x,this.y=this.tube.y+.5*this.tube.displayHeight-(1+2*this.id)*r/2}initBall(){this.setScale(.49),this.setDepth(d),this.setActive(!1),this.setVisible(!1)}}const M=y,x=c?"-test":"";class w extends Phaser.GameObjects.Image{constructor(e){super(e.scene,e.x,e.y,e.texture,e.frame),this.countBall=0,this.canSelect=!0,this.balls=[],this.touchOnTube=()=>{this.manager.gameManager.ballManager.handleTouchOnTube(this)},this.id=e.id,this.tall=e.tall,this.color=e.color,this.manager=e.tubeManager,this.initTube(),this.scene.add.existing(this)}update(){}getSimpleBalls(){const e=[];for(let t of this.balls)e.push(t.color);return e}addBalls(e){for(let t=0;t<e.length;t++){const l=this.manager.gameManager.ballManager.balls.getFirstDead();l.x=0,l.y=0,l.color=e[t],l.setTexture("ball"+x+`-${e[t]}`),l.id=t,l.tube=this,l.setVisible(!0),l.setActive(!0),this.balls.push(l)}this.countBall=e.length}updatePosition(e,t){this.x=e,this.y=t,this.backTube.x=this.x,this.backTube.y=this.y-r/2+3,this.sole.x=this.x,this.sole.y=this.y+r*this.tall/2+3}getBallLocation(e){return{x:this.x,y:this.y+this.displayHeight/2-(e-.5)*r}}getOrificeTubeLocation(){return{x:this.x,y:this.y-this.displayHeight/2-r}}alignBalls(){for(let e of this.balls)e.updatePosition()}initTube(){this.setScale(.5),this.setDepth(p),this.setInteractive(),this.setActive(!1),this.setVisible(!1),this.addBackTube(),this.addSole(),this.processInput()}processInput(){this.on(Phaser.Input.Events.POINTER_DOWN,this.touchOnTube),this.sole.on(Phaser.Input.Events.POINTER_DOWN,this.touchOnTube)}addBackTube(){this.backTube=this.scene.add.image(0,0,`tube_back_${this.tall}`).setScale(.5).setDepth(b).setVisible(!1)}addSole(){this.sole=this.scene.add.image(0,0,`sole-${this.color}`).setScale(.5).setDepth(u).setVisible(!1).setInteractive()}}const S=w;class L extends Phaser.Scene{constructor(){super({key:i})}preload(){}create(){this.addBackground(),this.addNewGameButton(),this.createGameManager(),this.processInput()}update(){}createGameManager(){this.gameManager=new class{constructor(e){this.build=new class{constructor(){}createLevel(){console.log("<=====================================>"),console.log("<============= NEW LEVEL =============>"),console.log("<=====================================>");const e=Math.floor(3+6*Math.random()),t=Math.floor(e*Math.random()),l=Math.floor(Math.random()*e),s=3+Math.floor(3*Math.random()),o=this.createTubesTall(e,l,s),a=this.createSoleColors(t,e),i=this.createExtraColors(t,a,e),r=this.createAllBalls(e,a,o,l,i);return{tubeCount:e,ballType:8,tubes:this.createTubes(e,o,a,r,s)}}createTubes(e,t,l,s,o){const a=[],i=this.createBallsTallArray(e,t,o);for(let o=0;o<e;o++)a.push({id:o,tall:t[o],color:l[o],ballColors:this.createBallColors(i[o],s),isComplete:!1});return a}createBallsTallArray(e,t,l){const s=[];for(let l=0;l<e;l++)s.push(t[l]);for(let t=0;t<l;t++){let t=Math.floor(Math.random()*e);for(;s[t]<=0;)t=Math.floor(Math.random()*e);s[t]-=1}return s}createBallColors(e,t){const l=[];for(let s=0;s<e;s++){const e=Math.floor(Math.random()*t.length);l.push(t[e]),t.splice(e,1)}return l}createAllBalls(e,t,l,s,o){const a=[];for(let i=0;i<e;i++)if(i!==s)if(0===t[i]){const e=o.shift();for(let t=0;t<l[i];t++)a.push(e)}else for(let e=0;e<l[i];e++)a.push(t[i]);return a}createTubesTall(e,t,l){const s=[];for(let o=0;o<e;o++)o===t?s.push(l):s.push(Math.floor(l-2+3*Math.random()));return s}createExtraColors(e,t,l){const s=[1,2,3,4,5,6,7,8],o=[];for(let a=0;a<l-e;a++)for(let e=0;e<s.length;e++)if(!t.includes(s[e])&&!o.includes(s[e])){o.push(s[e]);break}return o}createSoleColors(e,t){const l=[1,2,3,4,5,6,7,8],s=[];for(;s.length<e;){const e=Math.floor(Math.random()*l.length);s.push(l[e]),l.splice(e,1)}for(let l=0;l<t-e;l++)s.push(0);return this.shuffleArray(s)}shuffleArray(e){let t=e.length,l=0;for(;0!=t;)l=Math.floor(Math.random()*t),t--,[e[t],e[l]]=[e[l],e[t]];return e}findMaxTall(e){let t=0;return e.forEach((e=>{e>t&&(t=e)})),t}},this.moveCount=0,this.level=1,this.scene=e,this.initManager()}restart(){this.moveCount=0,this.moveLabel.text="Move: 0",this.updateLevelLabel(),this.killAllObjects(),this.loadLevelFromBuildTool()}updateMoveLabel(){this.moveCount+=1,this.moveLabel.text=`Move: ${this.moveCount}`}updateLevelLabel(){this.level+=1,this.level>10&&(this.level=1),this.levelLabel.text=`Level: ${this.level}`}addNewState(e,t,l){console.log("<==================== NEW MOVE ====================>"),this.gameLogic.addNewState(e,t,l),this.updateTubeTint(),this.updateMoveLabel();const s=this.gameLogic.getCurrentState();this.heuristic.calculateHeuristic(s),console.log()}updateTubeTint(){const e=this.gameLogic.getCurrentState(),t=this.tubeManager.getActiveTubes();for(let l of t){const t=e.getTubeById(l.id);t&&t.isComplete?(l.setTint(3861300),l.backTube.setTint(3861300)):(l.setTint(16777215),l.backTube.setTint(16777215))}}initManager(){this.gameLogic=new class{constructor(){this.states=[]}clearStates(){this.states=[]}createStartState(e){const t=new v(e.tubeCount,e.ballType,e.tubes);this.states.push(t)}addNewState(e,t,l){const s=new v(e,t,l);this.states.push(s),s.checkTubesComplete(),s.isGameOver()&&console.log("you are winner")}getCurrentState(){return this.states[this.states.length-1]}},this.heuristic=new class{constructor(e){this.colorCounts=[0,0,0,0,0,0,0,0,0],this.gameLogic=e}createColorCounts(e){this.colorCounts=[0,0,0,0,0,0,0,0,0];for(let t of e.tubes)for(let e=0;e<t.ballColors.length;e++)this.colorCounts[t.ballColors[e]]+=1;console.log(this.colorCounts)}solve(){const e=this.gameLogic.getCurrentState();console.log("tubes",e),this.calculateHeuristic(e),console.log("-------")}calculateHeuristic(e){let t=0;const l=e.tubes;for(let e of l)0===e.color?t+=this.calculateHeuristicTubeWhite(e):t+=this.calculateHeuristicTubeColor(e);return console.log("Heuristic Value = ",t),console.log("---"),t}calculateHeuristicTubeWhite(e){let t=0;if(0===e.ballColors.length)t=0;else if(1===e.ballColors.length)t=this.colorCounts[e.ballColors[0]]===e.tall?5:-1;else{t=1;let l=1;for(;l<e.ballColors.length&&e.ballColors[l]===e.ballColors[l-1];)e.tall===this.colorCounts[e.color]?t+=l+5:t+=l+1,l+=1;if(l<e.ballColors.length)for(let s=l;s<e.ballColors.length;s++)e.ballColors[s]!==e.ballColors[s-1]?t-=e.ballColors.length-s:t-=1}return e.isComplete&&e.tall===this.colorCounts[e.ballColors[0]]&&(t+=7),t}calculateHeuristicTubeColor(e){let t=0;if(0===e.ballColors.length)t=0;else if(1===e.ballColors.length)t=e.ballColors[0]===e.color?e.ballColors.length+7:-1;else{t=1;let l=0;for(;l<e.ballColors.length&&e.ballColors[l]===e.color;)e.tall===this.colorCounts[e.color]?t+=l+10:t+=l+3,l+=1;if(l<e.ballColors.length)for(let s=l;s<e.ballColors.length;s++)e.ballColors[s]!==e.ballColors[s-1]?t-=e.ballColors.length-s:t-=1}return e.isComplete&&e.tall===this.colorCounts[e.color]&&(t+=20),t}tryPossibleMove(e,t){let l=t.tubes;for(let e=0;e<l.length;e++)if(l[e].ballColors.length!==l[e].tall)for(let s=0;s<l.length;s++)e!=s&&l[s].ballColors.length>0&&(console.log(`if move [${s}] -> [${e}]`),this.tryMove(t,s,e));return[-1,-1,-1]}tryMove(e,t,l){const s=[];for(let t of e.tubes){const e=[];for(let l=0;l<t.ballColors.length;l++)e.push(t.ballColors[l]);s.push({id:t.id,tall:t.tall,color:t.color,ballColors:e,isComplete:t.isComplete})}let o=s[t].ballColors.pop();s[l].ballColors.push(o);const a=new v(e.tubeCount,e.ballType,s);return a.checkTubesComplete(),this.calculateHeuristic(a)}}(this.gameLogic),this.tubeManager=new class{constructor(e,t){this.scene=e,this.scene.registry.set(n,!0),this.gameManager=t}getSimpleTubes(){const e=[],t=this.getActiveTubes();for(let l of t)e.push({id:l.id,tall:l.tall,color:l.color,ballColors:l.getSimpleBalls(),isComplete:!1});return e}getOneTube(){return this.tubes.getFirst()}createTubes(){this.tubes=this.scene.add.group({runChildUpdate:!0,maxSize:10});for(let e=0;e<10;e++){const e=new S({scene:this.scene,x:0,y:0,id:0,tall:5,color:0,texture:"tube_front_5",tubeManager:this});this.tubes.add(e)}}addTubes(){const e=this.gameManager.gameLogic.getCurrentState();this.tubeCount=e.tubeCount,this.ballType=e.ballType;for(let t=0;t<this.tubeCount;t++){let l=e.tubes[t];const s=this.tubes.getFirstDead();s.id=l.id,s.tall=l.tall,s.color=l.color,s.countBall=l.ballColors.length,s.setTexture(`tube_front_${s.tall}`),s.backTube.setTexture(`tube_back_${s.tall}`),s.sole.setTexture(`sole-${s.color}`),s.backTube.setVisible(!0),s.sole.setVisible(!0),s.setActive(!0),s.setVisible(!0),s.setInteractive(),s.addBalls(l.ballColors)}this.alignAllTubes()}getActiveTubes(){return this.tubes.getMatching("active",!0)}killAllTubes(){this.tubes.getChildren().forEach((e=>{e.disableInteractive(),e.setVisible(!1),e.setActive(!1),e.sole.setVisible(!1),e.backTube.setVisible(!1),e.setTint(16777215),e.backTube.setTint(16777215),e.balls=[]}))}alignAllTubes(){const e=this.getActiveTubes(),t=e.length;let l=[0,1],a=[2,3];switch(t){case 2:l=[0],a=[1];break;case 3:l=[0],a=[1,2];break;case 4:l=[0,1],a=[2,3];break;case 5:l=[0,1,2],a=[3,4];break;case 6:l=[0,1,2],a=[3,4,5];break;case 7:l=[0,1,2,3],a=[4,5,6];break;case 8:l=[0,1,2,3],a=[4,5,6,7];default:l=[0,1,2,3],a=[4,5,6,7]}e.forEach((e=>{if(l.includes(e.id)){let t=s/(l.length+1);e.updatePosition(t*(e.id+1),.45*o-r*(e.tall/2))}else if(a.includes(e.id)){let t=s/(a.length+1);e.updatePosition(t*(e.id-l.length+1),.85*o-r*(e.tall/2))}e.alignBalls()}))}}(this.scene,this),this.ballManager=new class{constructor(e,t){this.hadSelectedOneBall=!1,this.selectedBalls=[],this.scene=e,this.initBallManager(),this.gameManager=t}createBalls(){let e=this.gameManager.tubeManager.getOneTube();for(let t=0;t<50;t++){const t=new M({scene:this.scene,x:0,y:0,tube:e,color:0,texture:"ball-0",id:0,manager:this});this.balls.add(t)}}handleTouchOnTube(e){this.hadSelectedOneBall?this.dropBall(e):this.selectBall(e)}killAllBalls(){this.balls.getChildren().forEach((e=>{e.setActive(!1),e.setVisible(!1)}))}initBallManager(){this.balls=this.scene.add.group({runChildUpdate:!0})}dropBall(e){let t=this.selectedBalls[0];if(e===t.tube)return this.selectedBalls.shift(),this.hadSelectedOneBall=!1,void this.moveBallFromOrificeTubeToInsideTube(t,e,e.countBall);e.tall!==e.countBall&&this.moveBallToTargetTube(e)}moveBallToTargetTube(e){let t=this.selectedBalls.shift();if(!t)return;const l=t.tube.getOrificeTubeLocation(),s=e.getOrificeTubeLocation(),o=class{static distanceTwoLocation(e,t,l,s){return Math.sqrt(Math.pow(e-l,2)+Math.pow(t-s,2))}}.distanceTwoLocation(l.x,l.y,s.x,s.y)/2;this.updateBallAndTube(t,e),this.moveBallToOrificeTube(t,e,e.countBall,o)}updateBallAndTube(e,t){e.tube.countBall-=1,e.tube.balls.splice(e.id,1),e.id=t.countBall,t.balls.push(e),e.tube=t,t.countBall+=1,t.canSelect=!1,this.hadSelectedOneBall=!1,this.gameManager.addNewState(this.gameManager.tubeManager.tubeCount,this.gameManager.tubeManager.ballType,this.gameManager.tubeManager.getSimpleTubes())}moveBallToOrificeTube(e,t,l,s){const o=t.getOrificeTubeLocation();this.scene.tweens.add({targets:e,x:o.x,y:o.y,duration:s,ease:Phaser.Math.Easing.Back,onComplete:()=>{this.moveBallFromOrificeTubeToInsideTube(e,t,l)}})}moveBallFromOrificeTubeToInsideTube(e,t,l){const s=t.getBallLocation(l);this.scene.tweens.add({targets:e,x:s.x,y:s.y,duration:300,ease:Phaser.Math.Easing.Bounce.Out,onComplete:()=>{t.canSelect=!0}})}selectBall(e){if(!e.canSelect||0===e.countBall)return;const t=this.getTopBallOfTube(e);this.selectedBalls.push(t),this.hadSelectedOneBall=!0;const l=e.getOrificeTubeLocation();this.scene.tweens.add({targets:t,y:l.y,duration:300,ease:Phaser.Math.Easing.Back.Out})}getTopBallOfTube(e){let t=e.balls[0];return e.balls.forEach((e=>{e.id>t.id&&(t=e)})),t}}(this.scene,this),this.tubeManager.createTubes(),this.ballManager.createBalls(),this.loadLevelFromJSON(this.level),this.addMoveLabel(),this.addLevelLabel()}loadLevelFromJSON(e){const t=l(795)(`./level-${e}.json`);t||console.error("Can't load level"),this.startGame(t)}loadLevelFromBuildTool(){const e=this.build.createLevel();e||console.error("Can't load level"),this.startGame(e)}startGame(e){this.gameLogic.clearStates(),this.gameLogic.createStartState(e),this.tubeManager.addTubes();const t=this.gameLogic.getCurrentState();t.checkTubesComplete(),this.updateTubeTint(),this.heuristic.createColorCounts(t),this.heuristic.solve()}killAllObjects(){this.tubeManager.killAllTubes(),this.ballManager.killAllBalls()}addMoveLabel(){this.moveLabel=new B(this.scene,20,20,"Move: 0",{font:"50px Arial",color:"white"}),this.moveLabel.setDepth(g)}addLevelLabel(){this.levelLabel=new B(this.scene,20,80,`Level: ${this.level}`,{font:"50px Arial",color:"white"}),this.levelLabel.setDepth(g)}}(this)}processInput(){this.newGameButton.processInput()}addBackground(){this.add.image(0,0,"background").setOrigin(0,0).setDepth(h)}addNewGameButton(){this.newGameButton=new T({scene:this,x:.9*s,y:.09*o,texture:"play"})}}const k=L;class P extends Phaser.Scene{constructor(){super({key:a})}preload(){this.cameras.main.setBackgroundColor(0),this.createLoadingGraphics(),this.load.on("progress",(e=>{this.progressBar.clear(),this.progressBar.fillStyle(8971347,1),this.progressBar.fillRect(this.cameras.main.width/4,this.cameras.main.height/2-16,this.cameras.main.width/2*e,16)}),this),this.load.on("complete",(()=>{this.progressBar.destroy(),this.loadingBar.destroy()}),this),this.load.pack("preload","./assets/pack.json","preload")}update(){this.scene.start(i)}create(){}createLoadingGraphics(){this.loadingBar=this.add.graphics(),this.loadingBar.fillStyle(16777215,1),this.loadingBar.fillRect(this.cameras.main.width/4-2,this.cameras.main.height/2-18,this.cameras.main.width/2+4,20),this.progressBar=this.add.graphics()}}const E=P,I={title:"Sort It",version:"1.0.0",width:750,height:1334,zoom:1,type:Phaser.AUTO,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},parent:"game",input:{keyboard:!0,mouse:!0},disableContextMenu:!0,physics:{default:"arcade",arcade:{debug:!1}},scene:[E,k]};class A extends Phaser.Game{constructor(e){super(e)}}window.addEventListener("load",(()=>{new A(I)}))},795:(e,t,l)=>{var s={"./level-1.json":140,"./level-10.json":168,"./level-2.json":233,"./level-3.json":10,"./level-4.json":553,"./level-5.json":764,"./level-6.json":804,"./level-7.json":77,"./level-8.json":119,"./level-9.json":956};function o(e){var t=a(e);return l(t)}function a(e){if(!l.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=a,e.exports=o,o.id=795},204:()=>{console.log("%c %c %c %c %c Built using phaser-project-template %c https://github.com/yandeu/phaser-project-template","background: #ff0000","background: #ffff00","background: #00ff00","background: #00ffff","color: #fff; background: #000000;","background: none")},140:e=>{"use strict";e.exports=JSON.parse('{"tubeCount":4,"ballType":7,"tubes":[{"id":0,"tall":3,"color":0,"ballColors":[2],"isComplete":false},{"id":1,"tall":3,"color":0,"ballColors":[1,1,1],"isComplete":false},{"id":2,"tall":3,"color":0,"ballColors":[2,2,3],"isComplete":false},{"id":3,"tall":1,"color":0,"ballColors":[],"isComplete":false}]}')},168:e=>{"use strict";e.exports=JSON.parse('{"tubeCount":4,"ballType":7,"tubes":[{"id":0,"tall":1,"color":6,"ballColors":[1],"isComplete":false},{"id":1,"tall":1,"color":0,"ballColors":[6],"isComplete":false},{"id":2,"tall":3,"color":2,"ballColors":[],"isComplete":false},{"id":3,"tall":3,"color":4,"ballColors":[4,4,4],"isComplete":false}]}')},233:e=>{"use strict";e.exports=JSON.parse('{"tubeCount":4,"ballType":7,"tubes":[{"id":0,"tall":3,"color":0,"ballColors":[2,1,2],"isComplete":false},{"id":1,"tall":3,"color":0,"ballColors":[1],"isComplete":false},{"id":2,"tall":3,"color":0,"ballColors":[2,3,1],"isComplete":false},{"id":3,"tall":1,"color":0,"ballColors":[],"isComplete":false}]}')},10:e=>{"use strict";e.exports=JSON.parse('{"tubeCount":4,"ballType":7,"tubes":[{"id":0,"tall":2,"color":6,"ballColors":[1,6],"isComplete":false},{"id":1,"tall":1,"color":0,"ballColors":[],"isComplete":false},{"id":2,"tall":2,"color":3,"ballColors":[3],"isComplete":false},{"id":3,"tall":3,"color":7,"ballColors":[6,3],"isComplete":false}]}')},553:e=>{"use strict";e.exports=JSON.parse('{"tubeCount":4,"ballType":7,"tubes":[{"id":0,"tall":2,"color":4,"ballColors":[],"isComplete":false},{"id":1,"tall":2,"color":2,"ballColors":[4,2],"isComplete":false},{"id":2,"tall":3,"color":3,"ballColors":[1,1],"isComplete":false},{"id":3,"tall":3,"color":0,"ballColors":[4,2,1],"isComplete":false}]}')},764:e=>{"use strict";e.exports=JSON.parse('{"tubeCount":4,"ballType":7,"tubes":[{"id":0,"tall":3,"color":0,"ballColors":[3,3,5],"isComplete":false},{"id":1,"tall":2,"color":3,"ballColors":[2],"isComplete":false},{"id":2,"tall":3,"color":2,"ballColors":[2,5],"isComplete":false},{"id":3,"tall":2,"color":5,"ballColors":[2],"isComplete":false}]}')},804:e=>{"use strict";e.exports=JSON.parse('{"tubeCount":4,"ballType":7,"tubes":[{"id":0,"tall":3,"color":3,"ballColors":[1,6,1],"isComplete":false},{"id":1,"tall":1,"color":2,"ballColors":[1],"isComplete":false},{"id":2,"tall":2,"color":6,"ballColors":[2],"isComplete":false},{"id":3,"tall":3,"color":0,"ballColors":[6],"isComplete":false}]}')},77:e=>{"use strict";e.exports=JSON.parse('{"tubeCount":4,"ballType":7,"tubes":[{"id":0,"tall":1,"color":3,"ballColors":[],"isComplete":false},{"id":1,"tall":3,"color":4,"ballColors":[2,1,2],"isComplete":false},{"id":2,"tall":3,"color":0,"ballColors":[1,1,3],"isComplete":false},{"id":3,"tall":2,"color":2,"ballColors":[],"isComplete":false}]}')},119:e=>{"use strict";e.exports=JSON.parse('{"tubeCount":4,"ballType":7,"tubes":[{"id":0,"tall":3,"color":0,"ballColors":[1,1],"isComplete":false},{"id":1,"tall":3,"color":0,"ballColors":[2,5,1],"isComplete":false},{"id":2,"tall":1,"color":0,"ballColors":[],"isComplete":false},{"id":3,"tall":1,"color":5,"ballColors":[],"isComplete":false}]}')},956:e=>{"use strict";e.exports=JSON.parse('{"tubeCount":4,"ballType":7,"tubes":[{"id":0,"tall":2,"color":0,"ballColors":[],"isComplete":false},{"id":1,"tall":1,"color":0,"ballColors":[],"isComplete":false},{"id":2,"tall":2,"color":0,"ballColors":[1,3],"isComplete":false},{"id":3,"tall":3,"color":0,"ballColors":[3,2,1],"isComplete":false}]}')}},l={};function s(e){var o=l[e];if(void 0!==o)return o.exports;var a=l[e]={exports:{}};return t[e].call(a.exports,a,a.exports,s),a.exports}s.m=t,e=[],s.O=(t,l,o,a)=>{if(!l){var i=1/0;for(h=0;h<e.length;h++){for(var[l,o,a]=e[h],r=!0,n=0;n<l.length;n++)(!1&a||i>=a)&&Object.keys(s.O).every((e=>s.O[e](l[n])))?l.splice(n--,1):(r=!1,a<i&&(i=a));if(r){e.splice(h--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[l,o,a]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,l)=>{var o,a,[i,r,n]=l,c=0;if(i.some((t=>0!==e[t]))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(n)var h=n(s)}for(t&&t(l);c<i.length;c++)a=i[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(h)},l=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})(),s.O(void 0,[216],(()=>s(324)));var o=s.O(void 0,[216],(()=>s(204)));o=s.O(o)})();