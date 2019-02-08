import service from '@/services/BaseService'

export default {
    register(user) {
        return service().post('/Register', user)
    },
    signIn(user) {
        return service().post('/Authentication', user)
    }
}