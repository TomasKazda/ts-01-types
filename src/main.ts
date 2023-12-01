//deklarace + přiřazení datového typu
let obecnaPromenna: any;
let pojmenovanaPromenna: string; //text
const pojmenovanaKonstanta: number = 48; //deklarace + inicializace čísla
let boolPromenna: boolean; //pravdivostní hodnota true/false

//undefined ... toto je ještě méně než nic
//null ... prázdný (více než undefined, ale méně než prázdný řetězec)

// funkce ... podprogramy, metody vracející vypočtenou hodnotu


let cislo: number = 12;
cislo = 12.333; //desetinný část je vyjádřená za tečkou
cislo = 2.4e23; // 2,4 × 10^23


let text: string;

text = "Text v uvozovkách";
text = 'Text v apostrofech === jednoduché uvozovky';
text = `Interpretovaný řetězec v převrácený apostrof altgr+7`;
text = `V proměnné cislo je číslo ${cislo}` //lze vložit obsah proměnné
console.log(text);

//unární operátory
let unarniPlus: number = +6; //kladná hodnota
let unarniMinus: number = -12; //záporná hodnota
let unarniNegace: boolean = !true; //tohle je už false :)

//binární operátory
// + - * / (sčítání, odčítání, násobení, dělení)
let bin1: number = 2 / 3; //zhruba dvě třetiny

let prom: number;

prom = 42; //operátor přiřazení (levostranný)

//kombinování současné hodnoty s hodnotou výrazu vpravo
prom += 8; //teď už je v prom 50 
prom -= 10; //teď to je 40
prom /= 4; //teť to je 10
prom *= 2.5; //teď to je 25
prom %= 10; //teď tam je 5 tedy MODULO (zbytek po dělení)

let bool: boolean = true;
bool = 6 > 12; //to je false
bool = "@" < "A"; //to je true protože 64 < 65
bool = "Nic" === "Něco"; //to je prostě false
bool = 64 === Number("64"); //toto je true
bool = 64 !== 64; //toto je false
bool = 64 !== 65; //toto je true

console.log(Number("64"))
console.log(Number("@"))
console.log(String(64)+2) //642
console.log(String.fromCharCode(64)) //@
console.log(String("@").charCodeAt(0)) //64

//operace + u string má význam "spojení" řetězců
text = "Ahoj" + " " + "Čau"; //Toto je "Ahoj Čau"
text = "Ahoj" + "Čau"; //Toto je "AhojČau"

//booleovské operace (základ)
bool = !bool; //negace původní hodnoty (true -> false nebo false -> true)
bool = true && true; //logický součin ... odpovídá "AND"
bool = true || true; //logický součet ... odpovídá "OR"
