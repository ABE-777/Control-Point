using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Helpers.HubModels;
using WebAPI.Models.Responses;

namespace WebAPI.Helpers.HubAdministrator
{
    public class SchoolClassroomManager
    {
        //DataSeed ds;
        public SchoolClassroomManager()
        {
            //ds = new DataSeed();
        }

        public ClassroomStudent GetClassroomCard(int cardId)
        {
			ClassroomStudent classroomStudent = null;
			using (var ds = new DataSeed()) {
				classroomStudent = ds.GetClassroomCardByCardId(cardId);
			}
			return classroomStudent;

		}

        public ClassroomStudent LeaveClassroomCard(int cardId, bool status)
        {
			ClassroomStudent classroomStudent = null;
			using (var ds = new DataSeed())
			{
				var isUpdate = ds.LeaveClassroomTimeForStudent(cardId, status);
				if (isUpdate)
				{
					classroomStudent = GetClassroomCard(cardId);
				}
			}
			return classroomStudent;
		}

        public ClassroomStudent LeaveHallwayCard(int cardId, bool status)
        {
			ClassroomStudent classroomStudent = null;
			using (var ds = new DataSeed())
			{
				classroomStudent = ds.LeaveHallwayTimeForStudent(cardId, status);
			}
			return classroomStudent;
		}

    }
}
