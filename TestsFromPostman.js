//testing https://swapi.py4e.com/

//testing https://swapi.py4e.com/api/people/10
pm.test("Status code is not 400", function () {
    pm.response.to.not.have.status(400); //Тест на статус-код 400
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500); //Время ответа меньше 200мс
});


//testing https://swapi.py4e.com/api/planets/
pm.test("Snippet has \"orbital_period\"", function () {
    pm.expect(pm.response.text()).to.include("orbital_period"); //Содержит ли фрагмент кода строчку "orbital_period"?
});

pm.test("Allow is present", function () {
    pm.response.to.have.header("Allow"); //Ответ содержит хедер со списком разрешенных типов запросов
});

pm.test("Response contains name", function () { //Прокерка на то, что ключ name имеет значение Endor
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Endor");
});


//testing https://swapi.py4e.com/api/starships/5
pm.collectionVariables.set("sts", "starships"); //Присваивание значения переменной

pm.globals.get("sts"); //придание новой переменной статус глобальной

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201, 202]); //Статус код ответа равен одному из приведенных значений
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

pm.test("Response time is less than 10ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(10);
});