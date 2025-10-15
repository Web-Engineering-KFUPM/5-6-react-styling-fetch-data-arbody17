import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    // ✅ TODO 1.3: Added Bootstrap margin-bottom
    <div className="mb-4">
      <InputGroup>
        <InputGroup.Text>🔍</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search users by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </InputGroup>
    </div>
  )
}

export default SearchBar
