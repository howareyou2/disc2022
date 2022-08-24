var banner = document.getElementById('banner'),			// 배너 본체
	img = banner.getElementsByTagName('img'),			// 스프라이트 이미지
	toggle = document.getElementById('toggle'),			// 배너 토글 버튼
	sound_btn = document.getElementById('sound_btn');	// 사운드 토글 버튼

// 배너의 높이값 변수
var banner_height = getComputedStyle(banner).height;
// console.log(banner_height);

//옷입히기 부분
var files1 =["Img/바디1_1.png", "Img/바디1_2.png", "Img/바디1_3.png"];
var files2 =["Img/바디2_1.png", "Img/바디2_2.png", "Img/바디2_3.png"];
var files3 =["Img/바디3_1.png", "Img/바디3_2.png", "Img/바디3_3.png"];
var imgs=[];

//Message 부분
var board=document.getElementById('here')
var btn=document.getElementById('btn_message')

function bgm_init(){
	var bgm = new Audio();	// 오디오 객체를 생성
	bgm.src = 'Img/Ikson-Free.wav';
	bgm.loop = true;
	document.body.appendChild(bgm);	// 문서에 오디오 객체 추가
}


/* ------------------------------------------------------------------------ */
// 메인
bgm_init();


/* ------------------------------------------------------------------------ */
// 사운드 버튼 이벤트 핸들러
sound_btn.onclick = function(event){
	var attr = sound_btn.getAttribute('class');			// 사운드버튼의 class 속성
	var bgm = document.getElementsByTagName('audio');	// audio 객체

	if(attr == 'active'){
		// 사운드 off
		sound_btn.removeAttribute('class');
		sound_btn.setAttribute('src', 'Img/sound_off.png');	// 버튼 이미지 교체
		bgm[0].pause();
	} else{
		// 사운드 on
		sound_btn.setAttribute('class', 'active');
		sound_btn.setAttribute('src', 'Img/sound_on.png');
		bgm[0].play();
	}
	event.stopPropagation();
}

// 배너 열고닫기 버튼 이벤트 핸들러
toggle.onclick = function(){
	var attr = banner.getAttribute('class');

	if(attr == 'active'){
		// 배너 닫기
		banner.removeAttribute('class');
		toggle.innerHTML = '도움말 열기';
		return false;
	} else{
		// 배너 열기
		banner.setAttribute('class', 'active');
		toggle.innerHTML = '도움말 닫기';
		return false;
	}
};

//요정 몸 선택
function changeBody (body){
    if(body=="body1"){
        document.getElementById('chara-img').src = "Img/바디1.png";
        console.log("OK");
		for(i=0; i<files1.length; i++){
			imgs[i]=new Image();
			imgs[i].src=files1[i];
		}
    }
	else if(body=="body2"){
        document.getElementById('chara-img').src = "Img/바디2.png";
        console.log("OK");
		for(i=0; i<files2.length; i++){
			imgs[i]=new Image();
			imgs[i].src=files2[i];
		}
    }
	else if(body=="body3"){
        document.getElementById('chara-img').src = "Img/바디3.png";
        console.log("OK");
		for(i=0; i<files3.length; i++){
			imgs[i]=new Image();
			imgs[i].src=files3[i];
		}
	}
}

//요정 컬러 선택
function changeColor (color){
    if(color=="color1"){
        document.getElementById('chara-img').src = imgs[0].src;
        console.log("OK");
    }
	else if(color=="color2"){
        document.getElementById('chara-img').src = imgs[1].src;
        console.log("OK");
    }
	else if(color=="color3"){
        document.getElementById('chara-img').src = imgs[2].src;
        console.log("OK");
	}
}

//요정 표정 선택
function changeFace (face){
    if(face=="face1"){
        document.getElementById('chara-face').src = "Img/표정1.png";
        console.log("OK");
	}
	else if(face=="face2"){
        document.getElementById('chara-face').src = "Img/표정22.png";
        console.log("OK");
	}
	else if(face=="face3"){
        document.getElementById('chara-face').src = "Img/표정3.png";
        console.log("OK");
	}
}

//요정 악세사리 선택
function changeAcc (Acc){
    if(Acc=="Acc1"){
        document.getElementById('chara-Acc').src = "Img/악세사리11.png";
        console.log("OK");
    }
	else if(Acc=="Acc2"){
        document.getElementById('chara-Acc').src = "Img/악세사리22.png";
        console.log("OK");
    }
	else if(Acc=="Acc3"){
        document.getElementById('chara-Acc').src = "Img/악세사리3.png";
        console.log("OK");
	}
}

//Message
function txt(){
	var txt = prompt('용기를 주는 Message를 입력해보세요!');
	board.innerHTML +='<h2>'+txt+'<h2>';
}
	
