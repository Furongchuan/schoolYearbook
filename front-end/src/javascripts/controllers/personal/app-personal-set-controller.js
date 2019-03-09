
import appPersonal from '@views/routes/app-personal-set.html'
import { getClassmateScienceName } from '@models/classmate-model'
const render = async (req, res, next) => {
    let getData = await getClassmateScienceName();
    let data = getData;
    res.render(template.compile(appPersonal)({
        items: data
    }))
}

export default {
    render
}