import axios from "axios"
const formula = axios.create({
  baseURL: "http://ergast.com/api/f1",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function formula1_get_2023_driversjson_read(payload) {
  return formula.get(`/2023/drivers.json`)
}
export const apiService = { formula1_get_2023_driversjson_read }
