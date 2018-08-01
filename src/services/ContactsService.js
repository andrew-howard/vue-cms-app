import service from '@/services/BaseService'

export default {
    getContacts() {
        return service().get('contacts')
    },
    addContact(contact) {
        return service().post('contacts', contact)
    },
    editContact(id, contact) {
        return service().put('contacts/' + id, contact)
    },
    deleteContact(id){
        return service().delete('contacts/' + id)
    }
}