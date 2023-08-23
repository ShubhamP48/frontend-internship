import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Icon,
  Checkbox,
} from "@mui/material";

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentListProps {
  data: Department[];
}

const Sidebar: React.FC<DepartmentListProps> = ({ data }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const handleExpand = (department: string) => {
    setExpanded((prev) => (prev === department ? null : department));
  };

  const handleSelect = (item: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(item)) {
       
        return prevSelected.filter((selectedItem) => selectedItem !== item);
      } else {
        
        return [...prevSelected, item];
      }
    });
  };

  const isDepartmentExpanded = (department: string) => expanded === department;
  const isItemSelected = (item: string) => selected.includes(item);

  return (
    <div
      style={{
        width: "300px", 
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        backgroundColor: "gray",
        borderRight: "2px solid blue",
        padding: "16px",
      }}
    >
      <List>
        {data.map((departmentItem) => (
          <div key={departmentItem.department}>
            <ListItem
              button
              onClick={() => handleExpand(departmentItem.department)}
            >
              <ListItemIcon>
                <Icon>
                  {isDepartmentExpanded(departmentItem.department)
                    ? "expand_less"
                    : "expand_more"}
                </Icon>
              </ListItemIcon>
              <Checkbox
                checked={departmentItem.sub_departments.every(isItemSelected)}
                onChange={() => {
                  
                  departmentItem.sub_departments.forEach(handleSelect);
                }}
              />
              <ListItemText
                primary={departmentItem.department}
                secondary={`(${departmentItem.sub_departments.length} sub-departments)`}
                onClick={() => handleSelect(departmentItem.department)}
                sx={{
                  fontWeight: isItemSelected(departmentItem.department)
                    ? "bold"
                    : "normal",
                  color: "black",
                }}
              />
            </ListItem>
            <Collapse in={isDepartmentExpanded(departmentItem.department)}>
              <List>
                {departmentItem.sub_departments.map((subDepartment) => (
                  <ListItem
                    key={subDepartment}
                    button
                    onClick={() => handleSelect(subDepartment)}
                    sx={{
                      backgroundColor: isItemSelected(subDepartment)
                        ? "lightblue"
                        : "white",
                    }}
                  >
                    <Checkbox checked={isItemSelected(subDepartment)} />
                    <ListItemText
                      primary={subDepartment}
                      sx={{
                        fontWeight: isItemSelected(subDepartment)
                          ? "bold"
                          : "normal",
                        color: "black",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
