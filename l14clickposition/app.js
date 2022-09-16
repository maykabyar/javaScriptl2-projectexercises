const getmap = document.querySelector('.map-container');

var getsmallcolor = document.getElementById('smallcolor'),
    getmediumcolor = document.getElementById('mediumcolor'),
    getlargecolor = document.getElementById('largecolor');

var circleidx = 0;

getmap.addEventListener('click',function(e){
    // console.log('i am working');
    circleidx++;

    console.log(e.target);

    if(e.target.classList.contains('map-container')){

        const cx = e.clientX;
        const cy = e.clientY;
        console.log(cx,cy);

        const mapleft = e.target.offsetLeft;
        const maptop = e.target.offsetTop;
        // console.log(mapleft,maptop);

        const curx = cx - mapleft;
        const cury = cy - maptop;
        // console.log(curx,cury);

        const circle = document.createElement('span');
        circle.id = circleidx;
        circle.classList.add('circle');
        // console.log(circle);

        circle.style.left = `${curx}px`;
        circle.style.top = `${cury}px`;

        // e.target.appendChild(circle);
        this.appendChild(circle);
    }

    removepointer(e);

});

function removepointer(e){
    // console.log(e.target);
    // console.log(e.target.id);

    if(e.target.id > 0){
        e.target.remove();
    }
}

