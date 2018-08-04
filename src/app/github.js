class Github {
    constructor(ClientID, ClientSecret) {
        this.client_id = ClientID;
        this.client_secret = ClientSecret;
        this.repos = 7;
        this.repos_sort = 'created: asc';
    }

    async obtenerUsuario(user) {
        const UserDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const  userData = await UserDataRequest.json();
        const userRepos = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repos}&sort=${this.repos_sort}`)
        const repos = await userRepos.json()
        
        return {
            userData:userData,
            Repos:repos
        };
    }
}
module.exports = Github;