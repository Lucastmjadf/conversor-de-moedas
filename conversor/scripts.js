
const convert = () => {
        const valordolar = 5.2
        const Vinput = document.getElementById('input').value
        const valorfinal = Vinput / valordolar
        const f = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Vinput)
        const resultfim = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorfinal)
        const br = document.getElementById('br')
        const eua = document.getElementById('eua')
        br.innerText = f
        eua.innerText = resultfim
}
const botao = document.getElementById('botao')
botao.addEventListener('click', convert)
const select = document.getElementById('select')
const trocamoeda = () => {
        if (select.value === 'dolar') {

                const valordolar = 5.2
                const Vinput = document.getElementById('input').value
                const valorfinal = Vinput / valordolar
                const br = document.getElementById('br')
                const eua = document.getElementById('eua')
                br.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Vinput)
                eua.innerText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorfinal) 
                const texto = document.getElementById('texto')
                const img = document.getElementById('img')
                texto.innerText = ' US$ Dólar americano'
                img.src = './assets/estados-unidos (1) 1.png'
                botao.addEventListener('click', trocamoeda)
        }
        if (select.value === 'euro') {
                const valoreuro = 6
                const Vinput = document.getElementById('input').value
                const valorfinal = Vinput / valoreuro
                const f = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Vinput)
                const valorFormatado = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorfinal)
                const br = document.getElementById('br')
                const eua = document.getElementById('eua')
                br.innerText = f
                eua.innerText = valorFormatado
                const texto = document.getElementById('texto')
                const img = document.getElementById('img')
                texto.innerText = '€ Euro'
                img.src = 'assets/euro.png'
                botao.addEventListener('click', trocamoeda)
        }
        if (select.value === 'bitcoin') {
                const valorbitcoin = 90.043
                const Vinput = document.getElementById('input').value
                const valorfinal = Vinput / valorbitcoin
                const br = document.getElementById('br')
                const eua = document.getElementById('eua')
                br.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Vinput)
                eua.innerText = valorfinal
                const texto = document.getElementById('texto')
                const img = document.getElementById('img')
                texto.innerText = '฿ Biticoin'
                img.src = 'assets/Design bitcoin(1) 1.png'
                botao.addEventListener('click', trocamoeda)
        }
}

select.addEventListener('change', trocamoeda)
