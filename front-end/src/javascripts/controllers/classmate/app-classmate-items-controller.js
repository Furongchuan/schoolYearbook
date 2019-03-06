
import appClassmateItems from '@views/routes/app-classmate-items.html'
import { getClassmateItems } from '@models/classmate-model'
const render = async (req, res, next) => { 
    let data = await getClassmateItems() 
    res.render(
        template.compile(appClassmateItems)({
            items: data
        })
    )
}
 
export default {
    render
}