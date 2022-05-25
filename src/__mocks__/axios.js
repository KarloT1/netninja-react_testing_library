const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Karlo",
          last: "Tomasic"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jgp"
        },
        login: {
          username: "TheGOAT"
        }
      }
    ]
  }
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}