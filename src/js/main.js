const allCard =document.querySelectorAll('#next')
const defaults = Number(document.querySelector('#content').getAttribute('data-default-session'))

console.log(allCard)
const Data = [
    {
        title:'For May #1',
        images:'https://c.tenor.com/UD3gBoJgqEgAAAAi/snuggles-caring.gif',
        text:'Ayangg aku sayang kamu!!',
        tapping:0,
        textAnimate:'wush-animate',
        textAnimate:'nothing'
    },
    {
        title:'For May #2',
        images:'https://c.tenor.com/TWoRbtqnMJkAAAAi/peach-goma.gif',
        text:'Aku nda mau pisah sama kamu!!',
        tapping:2,
        textAnimate:'nothing'
    },
    {
        title:'For May #3',
        images:'https://c.tenor.com/11msF_DFe2wAAAAC/rosycheeks-mochi-peach.gif',
        text:'Pokok nya aku mau sama kmu terus!!!',
        tapping:2,
        textAnimate:'nothing'
    },
    {
        title:'For May #4',
        images:'https://c.tenor.com/Y1tKE-48c2wAAAAi/tkthao219-bubududu.gif',
        text:'Awas kalo kamu sama cwo lain,ntr aku Cute!!',
        tapping:2,
        textAnimate:'nothing'
    }
]
function main(){
    
    // for(let i=1;i<=5;i++){
        let html =``;
        const card = document.createElement('div')
        card.setAttribute('class',' card col-sm-10 col-md-8 col-lg-5 bg-glass')

        
        card.id = "next"
        card.innerHTML = `
        <div class="card-body row flex-column align-items-center bg-glass">
            <h2 class="text-center" id="title">Look at this</h2>
            <p class="text-center">Think before tapping</p>
            <img id="image" src="https://c.tenor.com/zPz6pCUuN2cAAAAC/peach-cat-and-goma-cat-wave.gif" style="width: 230px;" alt="">
            <p class="mt-3 text-center" id="text">Haloo sayang ini for you</p>
            
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
                document.querySelector('#title').textContent = 'Thanks You Ayanggg'
                document.querySelector('#text').textContent = 'Hhehehehe Makasih ayang udah di tap'
                document.querySelector('#text').classList.add('mt-5')
                document.querySelector('#image').setAttribute('src','https://c.tenor.com/GrwArHOkj3oAAAAi/100.gif')
                console.log(document.querySelectorAll('.data-tapping-count'))
                document.querySelectorAll('.data-tapping-count').forEach(e=>{
                    e.classList.add('no-display')
               })
            }else{
                const Dt = Data[sett]
                console.log(Dt)
                if(sett >0){
                    document.querySelector('#text').classList.remove(Data[sett-1].textAnimate)
                }
                if(sett == Data.length ){
                    card.classList.add('re-height')
                    document.querySelector('#title').textContent = 'Thanks You Ayanggg'
                    document.querySelector('#text').textContent = 'Hhehehehe Makasih ayang udah di tap'
                    document.querySelector('#text').classList.add('mt-5')
                    document.querySelector('#image').setAttribute('src','https://c.tenor.com/GrwArHOkj3oAAAAi/100.gif')
                    console.log(document.querySelectorAll('.data-tapping-count'))
                    document.querySelectorAll('.data-tapping-count').forEach(e=>{
                            e.classList.add('no-display')
                    })
                }else{
                    document.querySelector('#title').textContent = Dt.title
                    document.querySelector('#text').textContent = Dt.text
                    document.querySelector('#text').classList.toggle(Dt.textAnimate)
                    document.querySelector('#image').setAttribute('src',Dt.images) 
                    document.querySelectorAll('.data-tapping-count').forEach(e=>{
                         e.setAttribute('data-tapping-count',Dt.tapping) 
                    })
                    document.querySelector('#content').setAttribute('data-default-session',sett + 1)
                }

            }
            card.classList.toggle('active')
            setTimeout(()=>{
                card.classList.toggle('active')
            },1000)
        })
        card.querySelector('.btn-danger').addEventListener('click',(e)=>{
            e.preventDefault();
            document.querySelector('#title').textContent = 'Kenapa keluar?'
            document.querySelector('#text').textContent = 'Ayang udah gak sayang aku ya!'
            // document.querySelector('#text').classList.add(Dt.textAnimate)
            document.querySelector('#image').setAttribute('src','https://c.tenor.com/j4XVPgtZZ7QAAAAi/peach-and.gif') 
            document.querySelectorAll('.data-tapping-count').forEach(e=>{
                 e.setAttribute('data-tapping-count',0) 
            })
            card.classList.toggle('active')
            card.querySelector('.btn-danger').classList.add('no-display')
            setTimeout(()=>{
                document.querySelector('#content').setAttribute('data-exit','1')
                card.classList.toggle('active')
            },1000)
        })
        
        
    // }
}

main()

      
