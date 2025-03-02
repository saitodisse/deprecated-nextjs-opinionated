import { FormExampleValidationSchema } from '../../model/FormExampleValidationSchema'

export default function formExample_api(req, res) {
  try {
    try {
      // server validation (VALIDATIONS)
      FormExampleValidationSchema.parse(req.body)
    } catch (error) {
      console.error({ msg: 'validation:', error })
      if (error?.errors) {
        res.status(500).json(error.errors)
        return
      }
      res.status(500).json(error)
      return
    }

    const dataObj = {
      email: req.body.email,
    }

    res.json({ email: dataObj, server_time: new Date().toLocaleTimeString() })
  } catch (e) {
    console.error('Request error', e)
    res.statusCode = 500
    res.json({
      error: e.message,
    })
  }
}
