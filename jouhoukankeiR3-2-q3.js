var TATE = 3;
var YOKO = 5;
var x;
var y;
var Tairu = [
    ['→', '△', '↓', '→', '△'],
    ['→', '△', '△', '↓', '←'],
    ['↑', '↑', '←', '→', '↑']
];
var Yonda = new Array(5);
for(var i = 0; i < 3; i++){
    Yonda[i] = new Array(5).fill(0);
}
var Kekka = new Array(5);
for(var i = 0; i < 3; i++){
    Kekka[i] = new Array(5).fill(0);   
}
var muki;

for(var sy = 0; sy < TATE; sy++){
    for(var sx = 0; sx < YOKO; sx++){
        console.log('('+ sx + '.' + sy + ')におくと');
        x = sx;
        y = sy;
        if(Tairu[y][x] === '△'){
            Kekka[sy][sx] = '止まったまま';
        }else{
            var Yonda = new Array(5);
            for(var i = 0; i < 3; i++){
                Yonda[i] = new Array(5).fill(0);
            }
            var owari = 0;
            while(!(owari)){
                if(Tairu[y][x] !== '△'){
                    muki = Tairu[y][x];
                    Yonda[y][x] = 1;
                }

                if(muki === '↑'){
                    y -= 1;
                }else if(muki === '↓'){
                    y += 1;
                }else if(muki === '←'){
                    x -= 1;
                }else if(muki === '→'){
                    x += 1;
                }

                if(!(x >= 0 && x < YOKO && y >= 0 && y < TATE)){
                    Kekka[sy][sx] = '壁にぶつかる';
                    owari = 1;
                }else if(Yonda[y][x]){
                    Kekka[sy][sx] = '動き続ける';
                    owari = 1;
                }else if(Kekka[y][x] === '壁にぶつかる' || Kekka[y][x] === '動き続ける'){
                    Kekka[sy][sx] = Kekka[y][x];
                    owari = 1;
                }
            }
            // console.table(Yonda);
            // console.table(Kekka);
        }
        console.log(Kekka[sy][sx]);
    }
}
