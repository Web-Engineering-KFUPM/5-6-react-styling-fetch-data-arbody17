import React from 'react'
import { Card, Button } from 'react-bootstrap'

function UserCard({ user, onUserClick }) {
  return (
    <Card className="user-card">
      <Card.Body>
        <div className="user-avatar mb-3">{user.name.charAt(0)}</div>

        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <strong>Username:</strong> {user.username}<br />
          <strong>Email:</strong> {user.email}<br />
          <strong>Phone:</strong> {user.phone}
        </Card.Text>

        <Button onClick={() => onUserClick(user)}>View Details</Button>
      </Card.Body>
    </Card>
  )
}
export default UserCard
