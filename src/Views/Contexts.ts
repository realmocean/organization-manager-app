import { UIRecordContext, UIView } from "@tuval/forms"

export const UserRecordContext = (id: any, content: (data?: any) => Function | UIView) => (
    id && UIRecordContext(content).resource('users').filter({ id: id })
    
)

export const PostRecordContext = (id: any, content: (data?: any) => Function | UIView) => (
    id && UIRecordContext(content).resource('posts').filter({ id: id })
)