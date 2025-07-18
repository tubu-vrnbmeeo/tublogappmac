import axios from 'axios'
import rails from "@rails/ujs"

axios.defaults.headers.common['X-CSRF-Token'] = rails.csrfToken()

export default axios