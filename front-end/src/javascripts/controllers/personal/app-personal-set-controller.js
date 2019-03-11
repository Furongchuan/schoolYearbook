
import appPersonal from '@views/routes/app-personal-set.html'
import { getClassmateScienceName } from '@models/classmate-model'
import { getUserInfo } from '@models'

const render = async (req, res, next) => {
    let getUserData = await getUserInfo();
    let userData = getUserData.data
    let getData = await getClassmateScienceName();
    let data = getData.data;
    // let scienceItem = data.filter(data => )
    userData.scienceItem = data;
    console.log(userData)
    res.render(template.compile(appPersonal)({
        info: userData
    }))
}

export default {
    render
}