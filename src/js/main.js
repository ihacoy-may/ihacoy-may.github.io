const allCard =document.querySelectorAll('#next')
const defaults = Number(document.querySelector('#content').getAttribute('data-default-session'))

console.log(allCard)
const Data = [
    {
        title:'Question #1',
        images:'./src/img/photo_2022-04-06_20-05-06.jpg',
        text:'Can you see my d?',
        tapping:0,
        textAnimate:'animate-text-1'
    },
    {
        title:'Question #2',
        images:'./src/img/photo_2022-04-06_20-05-06.jpg',
        text:'Ay Kamu sayang sama aku kan?',
        tapping:2,
        textAnimate:'nothing'
    }
]
function main(){
    
    // for(let i=1;i<=5;i++){
        let html =``;
        const card = document.createElement('div')
        card.setAttribute('class',' card col-sm-10 col-md-8 col-lg-5')

        
        card.id = "next"
        card.innerHTML = `
        <div class="card-body row flex-column align-items-center ">
            <h2 class="text-center" id="title">Look at this</h2>
            <p class="text-center">Think before tapping</p>
            <img id="image" src="./src/img/photo_2022-04-06_20-05-06.jpg" style="width: 230px;" alt="">
            <p class="mt-5" id="text">Haloo sayang ini for you</p>
            <div class="d-flex">
            <button class="btn btn-danger data-tapping-count" style="width: 100px;" data-tapping-count="0">Leave</button>
            <button class="btn btn-primary ml-2 data-tapping-count" style="width: 100px;" data-tapping-count="0">Oke</button>
            </div>
        </div>
    `
        document.querySelector('#content').appendChild(card);
        if(defaults == 0){
            card.classList.add('active')
        }

        card.querySelector('.btn-primary').addEventListener('click',(e)=>{
            const sett = Number(document.querySelector('#content').getAttribute('data-default-session'))
            e.preventDefault()
            console.log(Boolean(Number(document.querySelector('#content').getAttribute('data-exit'))))
            if(Boolean(Number(document.querySelector('#content').getAttribute('data-exit')))){
                card.classList.add('re-height')
                document.querySelector('#title').textContent = 'Thanks You'
                document.querySelector('#text').classList.add('no-display')
                document.querySelector('#image').classList.add('no-display')
                console.log(document.querySelectorAll('.data-tapping-count'))
                document.querySelectorAll('.data-tapping-count').forEach(e=>{
                    e.classList.add('no-display')
               })
            }else{
                const Dt = Data[sett]
                console.log(Dt)
                document.querySelector('#title').textContent = Dt.title
                document.querySelector('#text').textContent = Dt.text
                document.querySelector('#text').classList.toggle(Dt.textAnimate)
                document.querySelector('#image').textContent = Dt.images
                document.querySelectorAll('.data-tapping-count').forEach(e=>{
                     e.setAttribute('data-tapping-count',Dt.tapping) 
                })
                document.querySelector('#content').setAttribute('data-default-session',sett + 1)
            }
            card.classList.toggle('active')
            setTimeout(()=>{
                card.classList.toggle('active')
            },500)
        })
        card.querySelector('.btn-danger').addEventListener('click',(e)=>{
            e.preventDefault();
            document.querySelector('#title').textContent = 'Kenapa keluar?'
            document.querySelector('#text').textContent = 'Ayang udah gak sayang aku ya!'
            // document.querySelector('#text').classList.add(Dt.textAnimate)
            document.querySelector('#image').textContent = './src/img/photo_2022-04-06_20-05-06.jpg'
            document.querySelectorAll('.data-tapping-count').forEach(e=>{
                 e.setAttribute('data-tapping-count',0) 
            })
            card.classList.toggle('active')
            card.querySelector('.btn-danger').classList.add('no-display')
            setTimeout(()=>{
                document.querySelector('#content').setAttribute('data-exit','1')
                card.classList.toggle('active')
            },500)
        })
        
        
    // }
}

main()

        //     '<div class="card-body row flex-column align-items-center ">'+
        //         '<h2 class="text-center">Question #1</h2>'+
        //         '<p class="text-center">Think before tapping</p>'+
        //         '<img src="./src/img/photo_2022-04-06_20-05-06.jpg" style="width: 230px;" alt="">'+
        //         '<p class="mt-5">Sayang gak kamu sama aku?</p>'+
        //         '<div class="d-flex">'+
        //             '<button class="btn btn-danger leave" style="width: 100px;" data-tapping-count="4">Gak</button>'+
        //             '<button class="btn btn-primary ml-2 next" style="width: 100px;" data-tapping-count="4">Sayang</button>'+
        //         '</div>'
        // +'</div>'
        // +''
    




// allCard.forEach((element,key,parrent)=>{
//             let nextTapping = 0;
//             let rotate = 0 ;
//         element.children.item(0).children.item(4).children.item(1).addEventListener('click',(e)=>{
//             e.preventDefault()
//             console.log((element.children.item(0).children.item(4).querySelector('btn')))
//             const countNextTapping = Number(element.children.item(0).children.item(4).children.item(1).getAttribute('data-tapping-count'))
//             console.log(countNextTapping)
//             if(countNextTapping == nextTapping){
//                 element.style.transform = 'translate(0,-2500px)';
//                 element.classList.remove('active')
//                 key == (allCard.length-1)?
//                 console.log("The end")
//                 :
//                 allCard[key + 1].classList.add('active')
//             }else{
//                 rotate = rotate + 90;
//                 element.children.item(0).children.item(4).children.item(1).style.transform = `rotate(${rotate}deg)`;
//                 nextTapping = nextTapping +1
//                 console.log( nextTapping)
//             }
//         })

//         element.children.item(0).children.item(4).children.item(0).addEventListener('click',(e)=>{
//             e.preventDefault()
//             let countNextTapping = Number(element.children.item(0).children.item(4).children.item(0).getAttribute('data-tapping-count'))
//             if(countNextTapping == nextTapping){

//                 element.style.transform = 'translate(0,-2500px)';
//                 element.classList.remove('active')
//                 document.querySelector('#sad').classList.add('active')
//             }else{
//                 nextTapping = nextTapping +1
//                 console.log(nextTapping++)
//             }
//         })
// })

// document.querySelector('#sad').children.item(0).children.item(4).children.item(0).addEventListener('click',()=>{
//     allCard.item(allCard.length-1).classList.add('active')
// })