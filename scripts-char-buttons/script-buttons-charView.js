const chats = document.querySelector('.nav-panel__button-chats');
const contacts = document.querySelector('.nav-panel__button-contacts');
const trending = document.querySelector('.nav-panel__button-trending');
const profile = document.querySelector('.nav-panel__button-profile');
const authorisation = document.querySelector('.nav-panel__button-authorisation');
const registration = document.querySelector('.nav-panel__button-registration');

const charbody = document.querySelector('.charbody-kostilyamba');
const head = document.querySelector('.charhead');

const eyebrows = document.querySelector('.charhead__eyebrows');
const eyewhites = document.querySelector('.charhead__eye-whites');
const eyeslashes = document.querySelector('.charhead__eyeslashes');
const irisLeft = document.querySelector('.charhead__iris-left');
const pupilLeft = document.querySelector('.charhead__pupil-left');
const irisRight = document.querySelector('.charhead__iris-right');
const pupilRight = document.querySelector('.charhead__pupil-right');
const nose = document.querySelector('.charhead__nose');

const charRightHand = document.querySelector('.charRightHand-kostilyamba');
const charShoulder = document.querySelector('.charshoulder-kostilyamba');
const charForearm = document.querySelector('.charforearm');
const charHandIdle = document.querySelector('.charHandIdle');
const charHandWavingL = document.querySelector('.charHand-waving-toLeft');
const charhfndWavingR = document.querySelector('.charHand-waving-toRight');

const leftLeg = document.querySelector('.charLeftLeg-kostilyamba');
const rightLeg = document.querySelector('.charRightLeg-kostilyamba');



chats.addEventListener('mouseover', () =>{
    head.style.cssText = "transform: rotateZ(-3deg); transition: all 0.5s ease;"  
    
    eyebrows.style.cssText = "transform: translate(-14px, -59px); transition: all 0.5s ease;"
    eyeslashes.style.cssText = "transform: translate(-17.2px, -48px); transition: all 0.5s ease;"
    eyewhites.style.cssText = "transform: translate(-11.6px, -48px); transition: all 0.5s ease;"
    nose.style.cssText = "transform: translate(-19px, -37px); transition: all 0.5s ease;"
    irisLeft.style.cssText = "transform: translate(38px, -41px); transition: all 0.5s ease;"
    pupilLeft.style.cssText = "transform: translate(41px, -37px); transition: all 0.5s ease;"
    irisRight.style.cssText = "transform: translate(-10px, -47px); transition: all 0.5s ease;"
    pupilRight.style.cssText = "transform: translate(-5.5px, -43px); transition: all 0.5s ease;"
})

chats.addEventListener('mouseleave', () =>{
    head.style.cssText = "transition: all 0.5s ease;"  
    
    eyebrows.style.cssText = "transition: all 0.5s ease"
    eyeslashes.style.cssText = "transition: all 0.5s ease"
    eyewhites.style.cssText = "transition: all 0.5s ease"
    nose.style.cssText = "transition: all 0.5s ease"
    irisLeft.style.cssText = "transition: all 0.5s ease"
    pupilLeft.style.cssText = "transition: all 0.5s ease"
    irisRight.style.cssText = "transition: all 0.5s ease"
    pupilRight.style.cssText = "transition: all 0.5s ease"
})


contacts.addEventListener('mouseover', () =>{
    head.style.cssText = "transform: rotateZ(-5deg); transition: all 0.5s ease;"  
    
    eyebrows.style.cssText = "transform: translate(-12px, -59px); transition: all 0.5s ease;"
    eyeslashes.style.cssText = "transform: translate(-16.2px, -48px); transition: all 0.5s ease;"
    eyewhites.style.cssText = "transform: translate(-12px, -48px); transition: all 0.5s ease;"
    nose.style.cssText = "transform: translate(-18px, -37px); transition: all 0.5s ease;"
    irisLeft.style.cssText = "transform: translate(39px, -41px); transition: all 0.5s ease;"
    pupilLeft.style.cssText = "transform: translate(42.5px, -37px); transition: all 0.5s ease;"
    irisRight.style.cssText = "transform: translate(-9px, -47px); transition: all 0.5s ease;"
    pupilRight.style.cssText = "transform: translate(-3.5px, -43px); transition: all 0.5s ease;"
})

contacts.addEventListener('mouseleave', () =>{
    head.style.cssText = "transition: all 0.5s ease;"  
    
    eyebrows.style.cssText = "transition: all 0.5s ease"
    eyeslashes.style.cssText = "transition: all 0.5s ease"
    eyewhites.style.cssText = "transition: all 0.5s ease"
    nose.style.cssText = "transition: all 0.5s ease"
    irisLeft.style.cssText = "transition: all 0.5s ease"
    pupilLeft.style.cssText = "transition: all 0.5s ease"
    irisRight.style.cssText = "transition: all 0.5s ease"
    pupilRight.style.cssText = "transition: all 0.5s ease"
})


trending.addEventListener('mouseover', () =>{
    head.style.cssText = "transform: rotateZ(5deg); transition: all 0.5s ease;"  
    
    eyebrows.style.cssText = "transform: translate(-14px, -59px); transition: all 0.5s ease;"
    eyeslashes.style.cssText = "transform: translate(-17.2px, -48px); transition: all 0.5s ease;"
    eyewhites.style.cssText = "transform: translate(-11.6px, -48px); transition: all 0.5s ease;"
    nose.style.cssText = "transform: translate(-19px, -37px); transition: all 0.5s ease;"
    irisLeft.style.cssText = "transform: translate(38px, -41px); transition: all 0.5s ease;"
    pupilLeft.style.cssText = "transform: translate(41px, -37px); transition: all 0.5s ease;"
    irisRight.style.cssText = "transform: translate(-10px, -47px); transition: all 0.5s ease;"
    pupilRight.style.cssText = "transform: translate(-5.5px, -43px); transition: all 0.5s ease;"
})

trending.addEventListener('mouseleave', () =>{
    head.style.cssText = "transition: all 0.5s ease;"  
    
    eyebrows.style.cssText = "transition: all 0.5s ease"
    eyeslashes.style.cssText = "transition: all 0.5s ease"
    eyewhites.style.cssText = "transition: all 0.5s ease"
    nose.style.cssText = "transition: all 0.5s ease"
    irisLeft.style.cssText = "transition: all 0.5s ease"
    pupilLeft.style.cssText = "transition: all 0.5s ease"
    irisRight.style.cssText = "transition: all 0.5s ease"
    pupilRight.style.cssText = "transition: all 0.5s ease"
})


profile.addEventListener('mouseover', () =>{
    head.style.cssText = "transform: rotateZ(3deg); transition: all 0.5s ease;"  
    
    eyebrows.style.cssText = "transform: translate(-12px, -59px); transition: all 0.5s ease;"
    eyeslashes.style.cssText = "transform: translate(-16.2px, -48px); transition: all 0.5s ease;"
    eyewhites.style.cssText = "transform: translate(-12px, -48px); transition: all 0.5s ease;"
    nose.style.cssText = "transform: translate(-18px, -37px); transition: all 0.5s ease;"
    irisLeft.style.cssText = "transform: translate(39px, -41px); transition: all 0.5s ease;"
    pupilLeft.style.cssText = "transform: translate(42.5px, -37px); transition: all 0.5s ease;"
    irisRight.style.cssText = "transform: translate(-9px, -47px); transition: all 0.5s ease;"
    pupilRight.style.cssText = "transform: translate(-3.5px, -43px); transition: all 0.5s ease;"
})

profile.addEventListener('mouseleave', () =>{
    head.style.cssText = "transition: all 0.5s ease;"  
    
    eyebrows.style.cssText = "transition: all 0.5s ease"
    eyeslashes.style.cssText = "transition: all 0.5s ease"
    eyewhites.style.cssText = "transition: all 0.5s ease"
    nose.style.cssText = "transition: all 0.5s ease"
    irisLeft.style.cssText = "transition: all 0.5s ease"
    pupilLeft.style.cssText = "transition: all 0.5s ease"
    irisRight.style.cssText = "transition: all 0.5s ease"
    pupilRight.style.cssText = "transition: all 0.5s ease"
})


authorisation.addEventListener('mouseover', () =>{
    head.style.cssText = "transform: rotateZ(8deg); transition: all 0.5s ease;"
    charbody.style.cssText = "transform: rotateZ(2deg); transition: all 0.5s ease;"
    leftLeg.style.cssText = "transform: rotateZ(-1.5deg); transition: all 0.5s ease;"
    rightLeg.style.cssText = "transform: rotateZ(-1deg); transition: all 0.5s ease;"
    charRightHand.style.cssText = "transform: rotateZ(5.5deg); transition: all 0.5s ease;"
    charShoulder.style.cssText = "transform: rotateZ(-5.5deg); transition: all 0.5s ease;"
    
    eyebrows.style.cssText = "transform: translate(-14px, -59px); transition: all 0.5s ease;"
    eyeslashes.style.cssText = "transform: translate(-17.2px, -48px); transition: all 0.5s ease;"
    eyewhites.style.cssText = "transform: translate(-11.6px, -48px); transition: all 0.5s ease;"
    nose.style.cssText = "transform: translate(-19px, -37px); transition: all 0.5s ease;"
    irisLeft.style.cssText = "transform: translate(38px, -41px); transition: all 0.5s ease;"
    pupilLeft.style.cssText = "transform: translate(41px, -37px); transition: all 0.5s ease;"
    irisRight.style.cssText = "transform: translate(-10px, -47px); transition: all 0.5s ease;"
    pupilRight.style.cssText = "transform: translate(-5.5px, -43px); transition: all 0.5s ease;"
})

authorisation.addEventListener('mouseleave', () =>{
    head.style.cssText = "transition: all 0.5s ease;"
    charbody.style.cssText = "transition: all 0.5s ease;"
    leftLeg.style.cssText = "transition: all 0.5s ease;"
    rightLeg.style.cssText = "transition: all 0.5s ease;"
    charRightHand.style.cssText = "transition: all 0.5s ease;"
    charShoulder.style.cssText = "transition: all 0.5s ease;"
    
    eyebrows.style.cssText = "transition: all 0.5s ease"
    eyeslashes.style.cssText = "transition: all 0.5s ease"
    eyewhites.style.cssText = "transition: all 0.5s ease"
    nose.style.cssText = "transition: all 0.5s ease"
    irisLeft.style.cssText = "transition: all 0.5s ease"
    pupilLeft.style.cssText = "transition: all 0.5s ease"
    irisRight.style.cssText = "transition: all 0.5s ease"
    pupilRight.style.cssText = "transition: all 0.5s ease"
})


registration.addEventListener('mouseover', () =>{
    head.style.cssText = "transform: rotateZ(6deg); transition: all 0.5s ease;"
    charbody.style.cssText = "transform: rotateZ(3deg); transition: all 0.5s ease;"
    leftLeg.style.cssText = "transform: rotateZ(-2deg); transition: all 0.5s ease;"
    rightLeg.style.cssText = "transform: rotateZ(-1.5deg); transition: all 0.5s ease;"
    charRightHand.style.cssText = "transform: rotateZ(7.5deg); transition: all 0.5s ease;"
    charShoulder.style.cssText = "transform: rotateZ(-7.5deg); transition: all 0.5s ease;"
    
    eyebrows.style.cssText = "transform: translate(-12px, -59px); transition: all 0.5s ease;"
    eyeslashes.style.cssText = "transform: translate(-16.2px, -48px); transition: all 0.5s ease;"
    eyewhites.style.cssText = "transform: translate(-12px, -48px); transition: all 0.5s ease;"
    nose.style.cssText = "transform: translate(-18px, -37px); transition: all 0.5s ease;"
    irisLeft.style.cssText = "transform: translate(39px, -41px); transition: all 0.5s ease;"
    pupilLeft.style.cssText = "transform: translate(42.5px, -37px); transition: all 0.5s ease;"
    irisRight.style.cssText = "transform: translate(-9px, -47px); transition: all 0.5s ease;"
    pupilRight.style.cssText = "transform: translate(-3.5px, -43px); transition: all 0.5s ease;"
})

registration.addEventListener('mouseleave', () =>{
    head.style.cssText = "transition: all 0.5s ease;"
    charbody.style.cssText = "transition: all 0.5s ease;"
    leftLeg.style.cssText = "transition: all 0.5s ease;"
    rightLeg.style.cssText = "transition: all 0.5s ease;"
    charRightHand.style.cssText = "transition: all 0.5s ease;"
    charShoulder.style.cssText = "transition: all 0.5s ease;"
    
    eyebrows.style.cssText = "transition: all 0.5s ease"
    eyeslashes.style.cssText = "transition: all 0.5s ease"
    eyewhites.style.cssText = "transition: all 0.5s ease"
    nose.style.cssText = "transition: all 0.5s ease"
    irisLeft.style.cssText = "transition: all 0.5s ease"
    pupilLeft.style.cssText = "transition: all 0.5s ease"
    irisRight.style.cssText = "transition: all 0.5s ease"
    pupilRight.style.cssText = "transition: all 0.5s ease"
})