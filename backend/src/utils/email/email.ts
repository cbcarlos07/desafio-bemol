
import transporter from './transporter'
import env from '../../config/environments'
import customService from '../../api/services/custom.service'
import { convertDate } from '../../api/helper/data'
import { numberToReal } from '../../api/helper/number'

const emailPedido =  (id: number) =>{

    return new Promise( async(resolve, reject)=>{

        let dadosDoID: any = await customService.buscarPedido( id )        
        
        const mailOptions = {
            from: `${env.EMAIL.NAME} <${env.EMAIL.USER}>`,
            to: dadosDoID._cliente.email,
            subject: `Confirmação de Pedido`,
            html: 'Corpo da mensagem'
        }
        let pt_pedido = new Date( dadosDoID.dt_pedido )
        
        
        const objHtml = {
            id: dadosDoID.id,
            dt_pedido: convertDate(pt_pedido),
            observacao: dadosDoID.observacao,
            cliente: dadosDoID._cliente.nome,
            cpf: dadosDoID._cliente.cpf,
            email: dadosDoID._cliente.email,
            produtos: moutTableRow( dadosDoID.produtos ),
            total: totalDoPedido( dadosDoID.produtos )
        }
    
        mailOptions.html = mountBody( objHtml )
    
        const transp =   enviar(mailOptions)
        resolve( {msg: 'Envio de email sendo processado'} )
    })

}

const enviar = (mailOptions) => {
   
    return new Promise((resolve, reject)=>{

        transporter.sendMail(mailOptions, async (error, info)=>{
            if(error) {
                console.log('error', error);
                
                reject({error, status: false})
            }    
            else{
                console.log('E-mail enviado');
                
               resolve( {msg: 'Enviado...', status: true} )
            }
        })
    })
}

const mountBody = obj =>{
    return ` <div class="container" style="font-family:Roboto">
			
    
    <h1 style='color:#fff;background:#00a65a;padding: 10px;margin:0; vertical-align:bottom;border-left: 10px solid #31be64;font-family:Roboto;'>
    
        Vip Commerce
    </h1>
    <blockquote style='font-size:14pt;margin:0;padding: 40px 30px;border-left: 10px solid #00a65a;font-family:Roboto;'>
        
        Dados do Pedido
    
        <hr>
        <strong>Código:</strong> ${obj.id} <br>
        <strong>Data do Pedido</strong> ${obj.dt_pedido} <br>
        <strong>Observação:</strong> ${obj.observacao} <br>
        
        <br>
        Cliente
    
        <hr>
        <strong>Cliente</strong> ${obj.cliente} <br>
        <strong>CPF</strong> ${obj.cpf} <br>
        <strong>Email:</strong> ${obj.email} <br>
        
        <br>
        Produtos
        <hr>
        
        
        <div style="padding: 0px">
            <table style="border: 1px solid blue">
                <thead style="background-color: #31be64; color: white; width: 75%">
                    <th>PRODUTO</th>
                    <th>QTDE</th>
                    <th>VALOR</th>
                    <th>SUB TOTAL</th>
                </thead>
                <tbody >
                    ${obj.produtos}
                </tbody>

            </table>    
        <div>

        <br>

        <p>Total: ${numberToReal( obj.total )}</p>
        
        
        <br>
        
        <p>Atenciosamente,</p>


        <p>Equipe da Vip Commerce</p>
        <span style="font-size: 9px">Esse e-mail é gerado automaticamente, não precisa respondê-lo</span>
    </blockquote>
</div>
        `
}

const moutTableRow = (produtos) =>{
    let row = ''
    produtos.forEach(p => {
        row += `<tr>`+
               `  <td>${p.nome}</td><td>${p.qtde}</td><td>${numberToReal( p.valor )}</td><td>${numberToReal( p.total )}</td>`+
               `</tr>`
    })
    return row
}

const totalDoPedido = produtos => {
    return produtos
            .map( p => p.total)
            .reduce((prev,value) => prev + value, 0)
}
export {emailPedido}