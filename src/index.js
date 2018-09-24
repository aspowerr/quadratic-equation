
module.exports = function solveEquation(equation) {
  // your implementation
  let mass = [];
  mass = equation.split(' ');

  let a;
  let b;
  let c;

  a=mass[0];
  b=mass[3]+mass[4];
  c=mass[7]+mass[8];

    let A = Number(a);
    let B = Number(b);
    let C = Number(c);

    let D=Math.pow(B,2)-4*A*C;

    let x1 = 0, x2 = 0;

    x1=Math.round((-B-Math.sqrt(D))/(2*A));
    x2=Math.round((-B+Math.sqrt(D))/(2*A));

    let result = [];

    if (x1 > x2)
    {
      result[0]=x2;
      result[1]=x1;
    }
    else {
      result[1]=x2;
      result[0]=x1;
    }
return result;

}
