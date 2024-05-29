 function soma (a: number, b:number) {
    return a+b;
// função de soma 
}


// INTERFACES 
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelinos extends IAnimal {
    visaoNoturna: boolean;
}
interface ICaninos extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelinos | ICaninos; //TYPE 

const animal: IDomestico = {
    domestico: true,
    nome: 'Elefante',
    tipo: 'terrestre',
    porte: 'medio'
  
}


// TRATANDO INPUT 

const input = document.getElementById ('input') as HTMLInputElement; //define INPUT como elemento html //
input.addEventListener ('input', (event)=> {
    const i = event.currentTarget as HTMLInputElement; 
    console.log(i.value);
});


// GENERIC TYPES 
function adicionaApendiceALista <T> (array: T[], valor:T) {
    return array.map (() => valor);
}
adicionaApendiceALista([1,2,3], 'd'); 



// CONDICIONAIS A PARTIR DE PARÂMETROS

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionário';
}
function redirecione (usuario: IUsuario) {
    if (usuario.cargo){
        // redirecionar usuario.cargo
    } //  cargo? é um valor que pode ou não estar definido, é opcional
    // redirecionar para área de usuário
}


// usando OMIT que remove nacionalidade depois de descobrir que é brasileiro
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}
interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}
const brasileiro: Brasileiro = {

}

