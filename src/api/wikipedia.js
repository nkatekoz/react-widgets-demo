import axios from "axios";

export default axios.create({

    baseURL: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=apple',
    headers: {
        Authorization: 'Client-ID YmuaEPvN2vySjzMI5GXSTD7xQu_acBzq0PAApYcE9BI'
    }

});