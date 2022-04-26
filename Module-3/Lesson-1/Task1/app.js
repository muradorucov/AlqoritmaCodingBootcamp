const data = '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';
const objectData = JSON.parse(data);
objectData.id = 157;
const strData = JSON.stringify(objectData)
console.log(strData)