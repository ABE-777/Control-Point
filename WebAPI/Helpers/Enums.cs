using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Helpers
{
    public class Enums
    {
        public enum UserCreationResult
        {
            IsNotActivated,
            NotFound
        }

        public enum ObjectManipulationResult
        {
            Success,
            Exists,
            NotFound,
            ErrorOccured,
            Conflict,
            ExistPending
        }

        public enum CardStatus
        {
            Unprinted = 1,
            Active = 2,
            Suspended = 3,
            Inactive = 4
        }

        public enum FlightStatus
        {
            Open = 1,
            Closed = 2,
            Completed = 3,
            Finished = 4
        }

        public enum LaneStatus
        {
            Open = 1,
            Closed = 2
        }
    }
}
