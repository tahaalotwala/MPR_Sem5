

export const userInfo = async(req,res) => {
  try {
    const user = req.user;
    res.status(200).json(user);

  } catch (error) {
    console.log("Error in userInfo: ",error.message);
    res.status(500).json({error:"Internal server error"});
  }
}

