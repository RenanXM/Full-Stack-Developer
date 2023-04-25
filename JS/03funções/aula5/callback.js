function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}



function fun1(callback) {
  setTimeout(function () {
    console.log('f1');
    if (callback) callback();
  }, rand());
}

function fun2(callback) {
  setTimeout(function () {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function fun3(callback) {
  setTimeout(function () {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

//nesse caso(sem os if callback) ele vai executar primeiro 
//a função que printa olá mundo antes das outras, ja q elas
//tem delay (como resolvemos isso?)
//CALLBACKS! Nós definimos a ordem.
fun1(function() {
  fun2(function() {
    fun3(function() {
      console.log('Olá mundo');
    });
  });
});

/* 
f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}
*/