export default function ProfessionalRow({
  professional
}) {
  return (
    <tr>
      <td>{professional.name}</td>
      <td>
        <a href="mailto:">{professional.email}</a>
      </td>
      <td>
        <a href="tel:">{professional.phone_number}</a>
      </td>
    </tr>
  )
}
