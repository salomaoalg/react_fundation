

export default function HomePage() {
    return (
        <div>
            <Header title="com titulo" />
        </div>
    );
}

//VALOR RETORNADO DE UMA FUNÇÃO

function CreateTitle(title){
    if(title){
        return title;
    } else{
        return 'Sem Titulo Default Title';
    }
}
function Header({ title }) {
    return <h1>{CreateTitle(title)}</h1>;
}

/*

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

*/