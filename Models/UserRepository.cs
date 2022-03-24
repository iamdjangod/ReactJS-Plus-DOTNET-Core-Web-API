using System;
using System.Collections.Generic;

namespace simple_contact_app.Models
{
    public class UserRepository: IUserRepository
    {
        private List<UserModel> users = new List<UserModel>();
        private int _nextId = 1;

        public UserRepository()
        {
            Add(new UserModel { firstName= "first1", lastName="last1", email="email1@gmail.com", phone="09099999991", location="Lagos"});
            Add(new UserModel { firstName= "first2", lastName="last2", email="email2@gmail.com", phone="09099999992", location="Abuja"});
            Add(new UserModel { firstName= "first3", lastName="last3", email="email3@gmail.com", phone="09099999993", location="kano"});
            Add(new UserModel { firstName= "first4", lastName="last4", email="email4@gmail.com", phone="09099999994", location="Ibadan"});
        }

        public IEnumerable<UserModel> GetAll()
        {
            return users;
        }

        public UserModel Add(UserModel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.Id = _nextId++;
            users.Add(item);
            return item;
        }
    }
}