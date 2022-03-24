using System;
using System.Collections.Generic;

namespace simple_contact_app.Models
{
    public interface IUserRepository
    {
        IEnumerable<UserModel> GetAll();
        
        UserModel Add(UserModel user);
    }
}