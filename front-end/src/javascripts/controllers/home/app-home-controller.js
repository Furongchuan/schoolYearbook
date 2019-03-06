
import appHome from '@views/routes/app-home.html'

const render = (req, res, next) => {
    res.render(appHome)
}

export default {
    render
}