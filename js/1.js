
var DomObject = {

    CreateDiv: function (cont, clas, divId) {
        var d = document.createElement('div');
        d.id = divId;
        d.className = clas;
        d.innerHTML = cont;
        document.body.appendChild(d);
    },

    CreateTextDiv: function(text, find, clas) {
        var t = document.createElement('div');
        t.innerHTML = text;
        t.className = clas;
        var f =document.querySelector(find);
        f.appendChild(t);

    },

    CreateRadio: function (clas, find, text) {
        var r =document.createElement('input');
        r.className = clas;
        r.setAttribute('type','checkbox');
        r.setAttribute('name','answer');
        r.innerHTML = text;
        var f =document.querySelector(find);
        f.appendChild(r);
    },

    CreateButton: function (cont) {
        var b =document.createElement('button');
        b.className = 'btn btn-warning';
        b.setAttribute('type','button');
        b.innerHTML = cont;
        document.body.appendChild(b);
    }


};

DomObject.CreateDiv('Тест по програмированию','title_div','');

DomObject.CreateDiv('<span>2. Вопрос №1 <br></span>', 'for_input', '');
DomObject.CreateRadio('radio_button1', '.for_input');
DomObject.CreateTextDiv('Вариант ответа №1','.for_input', 'text_div' );
DomObject.CreateRadio('radio_button1', '.for_input');
DomObject.CreateTextDiv('Вариант ответа №2','.for_input', 'text_div' );
DomObject.CreateRadio('radio_button1', '.for_input');
DomObject.CreateTextDiv('Вариант ответа №3','.for_input', 'text_div' );

DomObject.CreateDiv('<span>2. Вопрос №2 <br></span>', 'for_input1', '');
DomObject.CreateRadio('radio_button1', '.for_input1');
DomObject.CreateTextDiv('Вариант ответа №1','.for_input1', 'text_div' );
DomObject.CreateRadio('radio_button1', '.for_input1');
DomObject.CreateTextDiv('Вариант ответа №2','.for_input1', 'text_div' );
DomObject.CreateRadio('radio_button1', '.for_input1');
DomObject.CreateTextDiv('Вариант ответа №3','.for_input1', 'text_div' );

DomObject.CreateDiv('<span>3. Вопрос №3 <br></span>', 'for_input2', '');
DomObject.CreateRadio('radio_button1', '.for_input2');
DomObject.CreateTextDiv('Вариант ответа №1','.for_input2', 'text_div' );
DomObject.CreateRadio('radio_button1', '.for_input2');
DomObject.CreateTextDiv('Вариант ответа №2','.for_input2', 'text_div' );
DomObject.CreateRadio('radio_button1', '.for_input2');
DomObject.CreateTextDiv('Вариант ответа №3','.for_input2', 'text_div' );

DomObject.CreateButton('Проверить мои результаты');