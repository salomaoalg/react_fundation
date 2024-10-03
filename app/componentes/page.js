import styles from './estilo.module.css'


function Imagens() {
    return (
        <img className={styles.margemimagem} src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson" />

    );
}

export default function Componentes() {
    return (
        <div>
            <section className={styles.main}>
                <h1>Amazing Scientista</h1>
                <div className={styles.corpo}>
                    <Imagens />
                    <Imagens />
                    <Imagens />
                </div>
            </section>
        </div>
    )
}