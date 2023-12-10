$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 12345-1234'
    })

    $('#cpf').mask('000.000.000/00',{
        placeholder: '123.456.789/00'
    })

    $('#cep').mask('00000-000',{
        placeholder: '01001-000'
    })

    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        submitHandler: function (form) {
            alert(`Cadastro efetuado com sucesso !!`)
            $('#form')[0].reset();
        },
        invalidHandler: function(evento, validador) {
            let campoIncorretos = validador.numberOfInvalids();
            if (campoIncorretos) {
                alert(`Existem ${campoIncorretos} campos obrigatorios incompletos`)
            }
        }
    })
});
