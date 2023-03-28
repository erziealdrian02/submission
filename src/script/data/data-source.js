class DataSource {
  static searchClub() {
    return (
      fetch(`https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json`)
      // fetch(`https://sports-api.dicoding.dev/teams/search?t=arsenal`)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.teams) {
            return Promise.resolve(responseJson.teams);
          } else {
            return Promise.reject(`Data is not found`);
          }
        })
    );
  }
}

export default DataSource;
