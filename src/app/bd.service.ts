import * as firebase from 'firebase'

export class Bd{
    public publicar(publicacao: any): void{

        firebase.default.database().ref(`publicacoes/${btoa(publicacao.email)}`)
        .push({ titulo: publicacao.titulo})

    }
}