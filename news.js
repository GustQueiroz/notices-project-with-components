let notices = []
let notice1 = []
let notice2 = []
let notice3 = []
let notice4 = []

notice1.push('Gustavo Queiroz');
notice1.push('Neymar sai do Santos');
notice1.push('A estrela Neymar sai do Santos e procura novos ares, na Espanha. Em entrevista para "TNT Esportes" disse "Bagulho é Santos mano"');
notice1.push('April 18');
notice1.push("https://www.umdoisesportes.com.br/_next/image/?url=https%3A%2F%2Fwww.umdoisesportes.com.br%2Fmedia%2Fumdoisesportes%2F2021%2F01%2F28123818%2Fneymar-1.jpg&w=2048&q=75");

notice2.push('Kauan Vitor');
notice2.push('Neymar sai do Barcelona');
notice2.push('A estrela Neymar sai de Barcelona e procura novos ares, na França. Em entrevista para "TNT Esportes" disse "Bagulho é Santos mano"');
notice2.push('August 14');
notice2.push("https://cdn.acritica.net/img/c/600/500/dn_arquivo/2023/08/whatsapp-image-2023-08-09-at-122959.jpeg");

notice3.push('Naldo Benny');
notice3.push('Neymar sai do PSG');
notice3.push('A estrela Neymar sai do PSG e procura novos ares, na Arabia. Em entrevista para "TNT Esportes" disse "Bagulho é Santos mano"');
notice3.push('Mai 19');
notice3.push("https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/08/09/neymar-ublw6asdo31g.png");

notice4.push('Gabriel Augusto');
notice4.push('Neymar volta pro Santos');
notice4.push('A estrela Neymar sai do Al-Hilal e retorna, ao Brasil. Em entrevista para "TNT Esportes" disse "Bagulho é Santos mano"');
notice4.push('Jan 11');
notice4.push("https://cdn.brasil247.com/pb-b247gcp/swp/jtjeq9/media/2023081411080_9e9fe9e1ddbde75537f9afe5fd9466f5513ea3a34bb8e1812c72cdc825fa5477.png");

notices.push(notice1)
notices.push(notice2)
notices.push(notice3)
notices.push(notice4)

class CardNews extends HTMLElement {
    constructor() {
        super();

            const shadow = this.attachShadow({ mode: "open" });

            const style = document.createElement('style');
            style.textContent = `
            .notices {
                display: flex;
                width: 800px;
                height: 250px;
                background-color: rgb(230, 229, 229);
                border-radius: 5px;
                cursor: pointer;
                margin-top: 30px;
            }
            .notices:hover {
                width: 810px;
                height: 260px;
                background-color: rgb(192, 191, 191);
                border-radius: 10px;
            }
            .noticeText {
                margin: 20px;
                margin-top: 50px;
                width: 500px;
                line-height: 10px
            }
            .noticeImage {
                margin: 30px;
                width: 250px;
                height: 200px;
                border-radius: 5px;
            }
            .title {
                font-size: 24px;
            }
            .description {
                opacity: 50%;
                font-size: 16px;
                line-height: 20px
            }
            .data {
                opacity: 50%;
                font-size: 12px;
            }
            .user {
                line-height: 20px
            }
            `
            for (let i = 0; i < notices.length; i++) {
            const user = notices[i][0]
            const title = notices[i][1]
            const description = notices[i][2]
            const data = notices[i][3]
            const image = notices[i][4]
        
            const noticeList = document.createElement('div')
                        noticeList.className = 'notices';
        
            const div = document.createElement('div');
                        div.className = `noticeText`;
        
                        div.innerHTML = `
                            <span class="user">${user}</span>
                            <h1 class="title">${title}</h1>
                            <p class="description">${description}</p>
                            <span class="data">${data}</span>
                        `;
            const img = document.createElement('img');
                        img.className = `noticeImage`;
                        img.src = `${image}`;
        
            noticeList.appendChild(div)
            noticeList.appendChild(img)

            shadow.appendChild(noticeList);
            shadow.appendChild(style);
        }

    }
}

customElements.define('card-news', CardNews)


