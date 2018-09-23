module.exports = function solveEquation(equation) {
  // your implementation
  let array = [];
  array=equation.charAt(0);
  let a = [];
  let b = [];
  let c = [];
  let i=0, j=0, q=0;
  while(array[i]!=' ')
    {
    a[i]=array[i]; 
    i++;
    }
    j=i;
    j=j+7;
    while(array[j]!=' ')
    {
      b[j]=array[j]; j++;
    }
    i=j+1;
    while(array[i]!=' ')
    {
      b[j]=array[i]; j++; i++;
    }
    j=i+5;
    while(array[j]!=' ')
    {
      c[q]=array[j];
      q++; j++;
    }
    j=j+1;
    while(array)
    {
      c[q]=array[j];
      j++; q++;
    }
    let A = Number(a);
    let B = Number(b);
    let C = Number(c);

    let D=Math.pow(B,2)-4*A*C;
    D=Math.sqrt(D);
    let x1, x2;
    x1=Number.isInteger((-B-D)/2);
    x2=Number.isInteger((int)(-B+D)/2);
    let result = [];
    if (x1>x2)
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
